import React, {PropsWithChildren} from 'react';
import styles from './styles';
import {View} from 'react-native';

export default function NavigatorWrapper({children}: PropsWithChildren) {
  return <View style={styles.wrapper}>{children}</View>;
}
