import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

type TextFieldProps = {
  editable?: boolean;
};

export default function TextField({editable}: TextFieldProps) {
  return <TextInput editable={editable} style={styles.root} />;
}
