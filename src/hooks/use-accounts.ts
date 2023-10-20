import React from 'react';
import AccountContext from '../contexts/account-context';
import AccountService from '../services/account-service';
import {produce} from 'immer';
import RepositoryService from '../services/repository-service';

type AccountUpdate = {
  code: string;
  name?: string;
  isRevenue?: boolean;
  launch?: boolean;
};

type AccountCreate = {
  code: string;
  name: string;
  isRevenue: boolean;
  launch: boolean;
  parentAccount: string;
};

export default function useAccounts() {
  const {accounts, setAccounts, search} = React.useContext(AccountContext);
  const flattenedAccounts = AccountService.flatten(accounts).splice(1);
  const filteredAccounts = React.useMemo(
    () => flattenedAccounts.filter(account => account.name.startsWith(search)),
    [flattenedAccounts, search],
  );

  async function createAccount(params: AccountCreate) {
    const {parentAccount, code, name, isRevenue, launch} = params;

    const hasParent = !!parentAccount;
    const newCode = code.split('.');
    const newIndex = newCode[newCode.length - 1];
    const parentCode = parentAccount.split('.');

    const newNode: NodeAccount = {
      name,
      isRevenue,
      launch,
    };

    const newState = hasParent
      ? produce(accounts, draft => {
          const parentNode = AccountService.getNodeById(
            draft.children ?? {},
            parentCode,
          );

          if (parentNode.children) {
            parentNode.children[newIndex] = newNode;
          } else {
            parentNode.children = {[newIndex]: newNode};
          }
        })
      : produce(accounts, draft => {
          if (draft.children) {
            draft.children[newIndex] = newNode;
          } else {
            draft.children = {[newIndex]: newNode};
          }
        });
    setAccounts(newState);
    updateDatabase(newState);
  }

  function updateAccount(params: AccountUpdate) {
    const newState = produce(accounts, draft => {
      const node = AccountService.getNodeById(
        draft.children ?? {},
        params.code.split('.'),
      );
      node.isRevenue = params.isRevenue ?? node.isRevenue;
      node.launch = params.launch ?? node.launch;
      node.name = params.name ?? node.name;
    });
    setAccounts(newState);
    updateDatabase(newState);
  }

  function removeAccount(identifier: string[]) {
    const newState = produce(accounts, draft => {
      const childKey = identifier[identifier.length - 1];
      const parentIdentifier = identifier.slice(0, identifier.length - 1);
      const parentNode =
        parentIdentifier.length === 0
          ? draft
          : AccountService.getNodeById(draft.children ?? {}, parentIdentifier);

      if (!parentNode.children) {
        throw new Error('Error while deleting account');
      }
      delete parentNode.children[childKey];

      if (Object.keys(parentNode.children).length === 0) {
        delete parentNode.children;
      }
    });
    setAccounts(newState);
    updateDatabase(newState);
  }

  async function updateDatabase(newState: NodeAccount) {
    const realm = await RepositoryService.getRealm();
    realm.write(() => {
      realm.deleteAll();
      realm.create('NodeAccount', {id: '0', data: JSON.stringify(newState)});
    });
  }

  return {
    accounts,
    flattenedAccounts,
    filteredAccounts,
    setAccounts,
    removeAccount,
    updateAccount,
    createAccount,
  };
}
