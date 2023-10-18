import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AccountService from '../../../services/account-service';
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
      {flattenedAccounts.map(account => (
        <Text key={account.code.join('')}>
          {JSON.stringify(account, null, 2)}
        </Text>
      ))}
    </View>
  );
}
