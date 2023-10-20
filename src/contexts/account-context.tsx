import React, {PropsWithChildren} from 'react';
import RepositoryService from '../services/repository-service';

type AccountContextType = {
  accounts: NodeAccount;
  setAccounts: React.Dispatch<React.SetStateAction<NodeAccount>>;
};

const initialData = {
  accounts: {isRevenue: false, launch: false, name: 'root'},
} as AccountContextType;

const AccountContext = React.createContext<AccountContextType>(
  initialData as AccountContextType,
);

export function AccountProvider({children}: PropsWithChildren) {
  const [accounts, setAccounts] = React.useState<NodeAccount>(
    initialData.accounts,
  );

  React.useEffect(() => {
    fetchLocalData();
  }, []);

  const fetchLocalData = async () => {
    try {
      const realm = await RepositoryService.getRealm();
      const data = realm.objects<NodeAccount>('NodeAccount').toJSON();
      if (data.length === 0) {
        return;
      }
      const accountsDB = JSON.parse(data[0].data as string) as NodeAccount;
      setAccounts(accountsDB);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AccountContext.Provider value={{accounts, setAccounts}}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
