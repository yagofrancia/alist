import React, {PropsWithChildren} from 'react';

type AccountContextType = {
  accounts: NodeAccount;
  setAccounts: React.Dispatch<React.SetStateAction<NodeAccount>>;
};

const dummyAsObject: NodeAccount = {
  name: 'root',
  children: {
    1: {
      name: 'primeiro',
      children: {
        1: {
          name: 'segundo',
          children: {
            1: {
              name: 'terceiro',
              children: {
                997: {
                  name: 'quarto',
                },
                999: {
                  name: 'quarto2',
                },
              },
            },
            2: {
              name: 'pjsdf',
              children: {
                999: {
                  name: '3434',
                },
              },
            },
          },
        },
        2: {
          name: 'primeiro2',
          children: {
            1: {
              name: 'onebutlast',
            },
            999: {
              name: 'last',
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
