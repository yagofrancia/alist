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
        <>
          <Text typography="roboto16_auto_regular">Deseja excluir a conta</Text>
          <Text typography="roboto16_bold_regular">
            {'\n '}
            {label}
          </Text>
          ?
        </>
      ),
      confirmText: 'Com certeza',
      dismissText: 'Não!',
      onConfirm() {
        removeAccount(code.split('.'));
      },
      image: 'ic_bin',
      imageColor: 'alert',
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
