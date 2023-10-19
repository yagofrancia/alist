import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import styles from './styles';
import R from '../../../res';

type TextFieldProps = {
  editable?: boolean;
  value: string;
  placeholder?: string;
  onChange: (e: string | React.ChangeEvent<any>) => void;
};

export default function TextField({
  editable,
  value,
  onChange,
  placeholder,
}: TextFieldProps) {
  function handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    onChange(e.nativeEvent.text);
  }
  return (
    <TextInput
      editable={editable}
      style={styles.root}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      placeholderTextColor={R.colors.grayLight}
    />
  );
}
