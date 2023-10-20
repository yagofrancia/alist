import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AccountItem from '../../molecules/account-item';
import Text from '../../atoms/text/text';
import useAccounts from '../../../hooks/use-accounts';

export default function Accounts() {
  const {flattenedAccounts} = useAccounts();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text typography="rubik20_auto_regular" color="grayDark">
          Listagem
        </Text>
        <Text typography="roboto15_auto_regular" color="grayLight">
          {flattenedAccounts.length} registros
        </Text>
      </View>
      {flattenedAccounts.map(account => (
        <AccountItem
          key={account.code.join('')}
          code={account.code.join('.')}
          name={account.name}
          isRevenue={account.isRevenue}
          launch={account.launch}
        />
      ))}
    </View>
  );
}
