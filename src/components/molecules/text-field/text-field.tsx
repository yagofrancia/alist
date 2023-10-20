import React from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
} from 'react-native';
import styles from './styles';
import R from '../../../res';

type TextFieldProps = {
  editable?: boolean;
  value: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  placeholderTextColor?: string;
  onChange: (e: string) => void;
};

export default function TextField({
  editable,
  value,
  onChange,
  placeholder,
  style,
  placeholderTextColor = R.colors.grayLight,
}: TextFieldProps) {
  function handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    onChange(e.nativeEvent.text);
  }
  return (
    <TextInput
      editable={editable}
      style={[styles.root, style]}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      placeholderTextColor={placeholderTextColor}
    />
  );
}
