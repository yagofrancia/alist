import React from 'react';
import {View} from 'react-native';
import Text from '../../atoms/text/text';
import styles from './styles';
import Icon from '../../atoms/icon';

type AccountItemProps = {
  code: string;
  name: string;
};

export default function AccountItem({code, name}: AccountItemProps) {
  return (
    <View style={styles.root}>
      <Text style={styles.label} color="greenDark">
        {code} - {name}
      </Text>
      <Icon name="ic_bin" height={20} width={20} />
    </View>
  );
}
