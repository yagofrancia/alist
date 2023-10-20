import React from 'react';
import {FlatList, View} from 'react-native';
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
      <FlatList
        data={flattenedAccounts}
        keyExtractor={({code}) => code.join('')}
        renderItem={({item}) => (
          <AccountItem
            key={item.code.join('')}
            code={item.code.join('.')}
            name={item.name}
            isRevenue={item.isRevenue}
            launch={item.launch}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
