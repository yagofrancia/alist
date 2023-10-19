import React from 'react';
import AccountContext from '../contexts/account-context';
import AccountService from '../services/account-service';

export default function useAccounts() {
  const {accounts, setAccounts} = React.useContext(AccountContext);
  const flattenedAccounts = AccountService.flatten(accounts).splice(1);

  return {accounts, flattenedAccounts, setAccounts};
}
