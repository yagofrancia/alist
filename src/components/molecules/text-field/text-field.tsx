import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import styles from './styles';

type TextFieldProps = {
  editable?: boolean;
  value: string;
  onChange: (e: string | React.ChangeEvent<any>) => void;
};

export default function TextField({editable, value, onChange}: TextFieldProps) {
  function handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    onChange(e.nativeEvent.text);
  }
  return (
    <TextInput
      editable={editable}
      style={styles.root}
      value={value}
      onChange={handleChange}
    />
  );
}
