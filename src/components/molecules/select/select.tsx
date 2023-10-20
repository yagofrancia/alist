import React, {PropsWithChildren} from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import {View} from 'react-native';

type SelectProps = {
  value: string | boolean;
  onChange: (value: string | boolean) => void;
  editable?: boolean;
};

function Select({
  value,
  onChange,
  children,
  editable = true,
}: PropsWithChildren<SelectProps>) {
  return (
    <View style={styles.root}>
      <Picker selectedValue={value} onValueChange={onChange} enabled={editable}>
        {children}
      </Picker>
    </View>
  );
}

Select.Item = Picker.Item;

export default Select;
