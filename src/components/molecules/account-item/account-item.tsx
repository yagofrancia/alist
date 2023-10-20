import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../atoms/text/text';
import styles from './styles';
import Icon from '../../atoms/icon';
import {showAlert} from '../../organisms/alert/alert';
import useAccounts from '../../../hooks/use-accounts';
import {useHomeNavigation} from '../../../navigation/root-navigator/param-list';

type AccountItemProps = {
  code: string;
  name: string;
  isRevenue: boolean;
  launch: boolean;
};

export default function AccountItem({code, name, ...rest}: AccountItemProps) {
  const {removeAccount} = useAccounts();
  const navigation = useHomeNavigation();
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

  function handlePress() {
    const codeId = code.split('.');
    const parentCode = codeId.slice(0, codeId.length - 1).join('.');
    navigation.navigate('CreateAccount', {code, name, parentCode, ...rest});
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.root}>
        <Text
          style={styles.label}
          color={rest.isRevenue ? 'greenDark' : 'alert'}>
          {label}
        </Text>
        <Icon
          name="ic_bin"
          height={20}
          width={20}
          onPress={handleDeletePress}
        />
      </View>
    </TouchableOpacity>
  );
}
