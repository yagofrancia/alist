import React from 'react';
import AccountContext from '../contexts/account-context';
import AccountService from '../services/account-service';
import {produce} from 'immer';

export default function useAccounts() {
  const {accounts, setAccounts} = React.useContext(AccountContext);
  const flattenedAccounts = AccountService.flatten(accounts).splice(1);

  // TODO: bring the logic to add accounts to here (like removeAccount does)

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
    });

    setAccounts(newState);
  }

  return {accounts, flattenedAccounts, setAccounts, removeAccount};
}
