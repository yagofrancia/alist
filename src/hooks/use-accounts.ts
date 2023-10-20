import React from 'react';
import AccountContext from '../contexts/account-context';
import AccountService from '../services/account-service';
import {produce} from 'immer';

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
  const {accounts, setAccounts} = React.useContext(AccountContext);
  const flattenedAccounts = AccountService.flatten(accounts).splice(1);

  function createAccount(params: AccountCreate) {
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
            parentNode.children = {'1': newNode};
          }
        })
      : produce(accounts, draft => {
          if (draft.children) {
            draft.children[newIndex] = newNode;
          } else {
            draft.children = newNode;
          }
        });
    setAccounts(newState);
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
  }

  function removeAccount(identifier: string[]) {
    const newState = produce(accounts, draft => {
      const childKey = identifier[identifier.length - 1];
      const parentIdentifier = identifier.slice(0, identifier.length - 1);
      const parentNode = AccountService.getNodeById(
        draft.children ?? {},
        parentIdentifier,
      );

      if (!parentNode.children) {
        throw new Error('Error while deleting account');
      }
      delete parentNode.children[childKey];

      if (Object.keys(parentNode.children).length === 0) {
        delete parentNode.children;
      }
    });
    setAccounts(newState);
  }

  return {
    accounts,
    flattenedAccounts,
    setAccounts,
    removeAccount,
    updateAccount,
    createAccount,
  };
}
