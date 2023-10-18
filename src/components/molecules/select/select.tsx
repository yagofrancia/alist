import React, {PropsWithChildren} from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import {View} from 'react-native';

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
};

function Select({value, onChange, children}: PropsWithChildren<SelectProps>) {
  return (
    <View style={styles.root}>
      <Picker selectedValue={value} onValueChange={onChange}>
        {children}
      </Picker>
    </View>
  );
}

Select.Item = Picker.Item;

export default Select;
