import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LabeledInput from '../../molecules/labeled-input/labeled-input';
import Select from '../../molecules/select';
import TextField from '../../molecules/text-field/text-field';
import {useFormik} from 'formik';

type FormShape = {
  parentAccount: string;
  code: string;
  name: string;
  isRevenue: boolean;
  launch: boolean;
};

export default function CreateAccountForm() {
  const formik = useFormik<FormShape>({
    initialValues: {
      parentAccount: '',
      code: '',
      name: '',
      isRevenue: false,
      launch: false,
    },
    onSubmit: handleSubmit,
  });

  function handleSubmit() {}

  function handlePickerChange(fieldName: keyof FormShape) {
    return function (value: boolean | string) {
      formik.setFieldValue(fieldName, value);
    };
  }

  return (
    <View style={styles.root}>
      <LabeledInput label="Conta pai">
        <Select
          onChange={handlePickerChange('parentAccount')}
          value={formik.values.parentAccount}>
          <Select.Item value="" label="Selecione uma conta pai" />
          <Select.Item value="option 1" label="Option 1" />
          <Select.Item value="option 2" label="Option 2" />
          <Select.Item value="option 3" label="Option 3" />
          {/* Dynamically filled */}
        </Select>
      </LabeledInput>
      <LabeledInput label="Código">
        <TextField
          value={formik.values.code}
          onChange={formik.handleChange('code')}
        />
      </LabeledInput>
      <LabeledInput label="Nome">
        <TextField
          value={formik.values.name}
          onChange={formik.handleChange('name')}
        />
      </LabeledInput>
      <LabeledInput label="Tipo">
        <Select
          onChange={handlePickerChange('isRevenue')}
          value={formik.values.isRevenue}>
          <Select.Item value={true} label="Receita" />
          <Select.Item value={false} label="Custo" />
        </Select>
      </LabeledInput>
      <LabeledInput label="Aceita lançamentos">
        <Select
          onChange={handlePickerChange('launch')}
          value={formik.values.launch}>
          <Select.Item value={false} label="Não" />
          <Select.Item value={true} label="Sim" />
        </Select>
      </LabeledInput>
    </View>
  );
}
