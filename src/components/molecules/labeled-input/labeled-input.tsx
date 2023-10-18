import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import Text from '../../atoms/text/text';
import styles from './styles';

type LabeledInputProps = {
  label: string;
};

export default function LabeledInput({
  label,
  children,
}: PropsWithChildren<LabeledInputProps>) {
  return (
    <View style={styles.root}>
      <Text
        typography="rubik15_auto_regular"
        color="grayMedium"
        style={styles.label}>
        {label}
      </Text>
      {children}
    </View>
  );
}
