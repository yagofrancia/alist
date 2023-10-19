import React, {PropsWithChildren} from 'react';

type AccountContextType = {
  accounts: NodeAccount;
  setAccounts: React.Dispatch<React.SetStateAction<NodeAccount>>;
};

const dummyAsObject: NodeAccount = {
  name: 'root',
  isRevenue: true,
  launch: true,
  children: {
    1: {
      name: 'primeiro',
      isRevenue: true,
      launch: true,
      children: {
        1: {
          name: 'segundo',
          isRevenue: true,
          launch: true,
          children: {
            1: {
              name: 'terceiro',
              isRevenue: true,
              launch: true,
              children: {
                999: {
                  name: 'quarto2',
                  isRevenue: true,
                  launch: true,
                },
              },
            },
            2: {
              name: 'pjsdf',
              isRevenue: true,
              launch: true,
              children: {
                1: {
                  name: '3434',
                  isRevenue: true,
                  launch: true,
                },
              },
            },
          },
        },
        2: {
          name: 'primeiro2',
          isRevenue: true,
          launch: true,
          children: {
            999: {
              name: 'last',
              isRevenue: true,
              launch: true,
            },
          },
        },
      },
    },
  },
};

const initialData = {
  accounts: dummyAsObject,
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
