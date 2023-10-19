import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import Text from '../../atoms/text/text';
import styles from './styles';

type LabeledInputProps = {
  label: string;
  error?: string;
  preserveErrorPlace?: boolean;
};

export default function LabeledInput({
  label,
  children,
  error,
  preserveErrorPlace = false,
}: PropsWithChildren<LabeledInputProps>) {
  const errorUI = error ? (
    <Text typography="roboto13_auto_regular" color="alert" style={styles.error}>
      {error}
    </Text>
  ) : null;

  return (
    <View style={styles.root}>
      <Text
        typography="rubik15_auto_regular"
        color="grayMedium"
        style={styles.label}>
        {label}
      </Text>
      {children}
      {preserveErrorPlace ? (
        <View style={styles.errorPlaceholder}>{errorUI}</View>
      ) : (
        errorUI
      )}
    </View>
  );
}
