import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AccountService from '../../../services/account-service';
import AccountItem from '../../molecules/account-item';
import Text from '../../atoms/text/text';

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

export default function Accounts() {
  const [accounts, _] = React.useState(dummyAsObject);

  const flattenedAccounts = AccountService.flatten(accounts);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text typography="rubik20_auto_regular" color="darkGray">
          Listagem
        </Text>
        <Text typography="roboto15_auto_regular" color="lightGray">
          {flattenedAccounts.length} registros
        </Text>
      </View>
      {flattenedAccounts.map(account => (
        <AccountItem
          key={account.code.join('')}
          code={account.code.join('.')}
          name={account.name}
        />
      ))}
    </View>
  );
}
