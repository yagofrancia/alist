import React from 'react';
import {View} from 'react-native';
import Text from '../../atoms/text/text';
import styles from './styles';
import Icon from '../../atoms/icon';
import {showAlert} from '../../organisms/alert/alert';
import useAccounts from '../../../hooks/use-accounts';

type AccountItemProps = {
  code: string;
  name: string;
};

export default function AccountItem({code, name}: AccountItemProps) {
  const {removeAccount} = useAccounts();
  const label = `${code} - ${name}`;
  function handleDeletePress() {
    showAlert({
      message: (
        <Text typography="roboto15_auto_regular">
          Deseja excluir a conta
          <Text typography="roboto15_bold_regular"> {label}</Text>?
        </Text>
      ),
      confirmText: 'Com certeza',
      onConfirm() {
        removeAccount(code.split('.'));
      },
    });
  }
  return (
    <View style={styles.root}>
      <Text style={styles.label} color="greenDark">
        {label}
      </Text>
      <Icon name="ic_bin" height={20} width={20} onPress={handleDeletePress} />
    </View>
  );
}
