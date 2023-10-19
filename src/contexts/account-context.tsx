import React, {PropsWithChildren} from 'react';

type AccountContextType = {
  accounts: NodeAccount;
  setAccounts: React.Dispatch<React.SetStateAction<NodeAccount>>;
};

const initialData = {
  accounts: {
    name: 'root',
  },
} as AccountContextType;

const AccountContext = React.createContext<AccountContextType>(
  initialData as AccountContextType,
);

export function AccountProvider({children}: PropsWithChildren) {
  const [accounts, setAccounts] = React.useState<NodeAccount>(
    initialData.accounts,
  );
  return (
    <AccountContext.Provider value={{accounts, setAccounts}}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
