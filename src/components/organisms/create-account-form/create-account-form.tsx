import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LabeledInput from '../../molecules/labeled-input/labeled-input';
import Select from '../../molecules/select';
import TextField from '../../molecules/text-field/text-field';

export default function CreateAccountForm() {
  const [data, setData] = React.useState('');

  return (
    <View style={styles.root}>
      <LabeledInput label="Conta pai">
        <Select onChange={value => setData(value)} value={data}>
          <Select.Item value="option 1" label="Option 1" />
          <Select.Item value="option 2" label="Option 2" />
          <Select.Item value="option 3" label="Option 3" />
        </Select>
      </LabeledInput>
      <LabeledInput label="Código">
        <TextField />
      </LabeledInput>
      <LabeledInput label="Nome">
        <TextField />
      </LabeledInput>
      <LabeledInput label="Tipo">{/* <Select /> */}</LabeledInput>
      <LabeledInput label="Aceita lançamentos">{/* <Select /> */}</LabeledInput>
    </View>
  );
}
