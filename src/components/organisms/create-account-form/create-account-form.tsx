import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LabeledInput from '../../molecules/labeled-input/labeled-input';
import Select from '../../molecules/select';
import TextField from '../../molecules/text-field/text-field';
import {useFormik} from 'formik';
import useAccounts from '../../../hooks/use-accounts';
import * as yup from 'yup';

type FormShape = {
  parentAccount: string;
  code: string;
  name: string;
  isRevenue: boolean;
  launch: boolean;
};

const formValidationSchema = yup.object().shape({
  name: yup.string().required(),
});

type CreateAccountFormProps = {
  formRef: React.MutableRefObject<FormRef | undefined>;
};

export default function CreateAccountForm({formRef}: CreateAccountFormProps) {
  const {flattenedAccounts} = useAccounts();
  const formik = useFormik<FormShape>({
    initialValues: {
      parentAccount: '',
      code: '',
      name: '',
      isRevenue: false,
      launch: false,
    },
    onSubmit: handleSubmit,
    validationSchema: formValidationSchema,
  });

  React.useImperativeHandle(formRef, () => {
    return {
      submitForm: formik.submitForm,
    };
  });

  function handleSubmit() {}

  // function handleValidate() {
  //   const errors = {};
  // }

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
          {flattenedAccounts.map(account => {
            const identifier = account.code.join('.');
            return (
              <Select.Item
                key={identifier}
                value={identifier}
                label={identifier}
              />
            );
          })}
          {/* <Select.Item value="option 3" label="Option 3" /> */}
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
