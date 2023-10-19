import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LabeledInput from '../../molecules/labeled-input/labeled-input';
import Select from '../../molecules/select';
import TextField from '../../molecules/text-field/text-field';
import {useFormik} from 'formik';
import useAccounts from '../../../hooks/use-accounts';
import * as yup from 'yup';
import {produce} from 'immer';
import AccountService from '../../../services/account-service';
import {useNavigation} from '@react-navigation/native';

type FormShape = {
  parentAccount: string;
  code: string;
  name: string;
  isRevenue: boolean;
  launch: boolean;
};

function isHierarchicalCode(value: string) {
  const pattern = /^(?:[1-9]\d{0,2}(\.|$))+$/;
  return pattern.test(value);
}

const formValidationSchema = yup.object().shape({
  name: yup.string().required('É necessário o nome da conta'),
  code: yup
    .string()
    .required('É necessário o código da conta')
    .test(
      'is-hierarquical',
      'O Código deve ter o formato X.XXX',
      isHierarchicalCode,
    ),
});

type CreateAccountFormProps = {
  formRef: React.MutableRefObject<FormRef | undefined>;
};

export default function CreateAccountForm({formRef}: CreateAccountFormProps) {
  const {flattenedAccounts, accounts, setAccounts} = useAccounts();
  const navigation = useNavigation();
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
    validateOnChange: false,
  });

  React.useImperativeHandle(formRef, () => {
    return {
      submitForm: formik.submitForm,
    };
  });

  function handleSubmit() {
    // const hasParent = !!formik.values.parentAccount;
    const newCode = formik.values.code.split('.');
    const newIndex = newCode[newCode.length - 1];

    const parentCode = formik.values.parentAccount.split('.');

    const nextState = produce(accounts, draft => {
      const parentNode = AccountService.getNodeById(
        draft.children ?? {},
        parentCode,
      );

      const newNode: NodeAccount = {
        name: formik.values.name,
        isRevenue: formik.values.isRevenue,
        launch: formik.values.launch,
      };

      if (parentNode.children) {
        parentNode.children[newIndex] = newNode;
      } else {
        parentNode.children = newNode;
      }
    });

    setAccounts(nextState);
    navigation.goBack();
  }

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
          <Select.Item value="" label="Nenhuma" />
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
        </Select>
      </LabeledInput>
      <LabeledInput label="Código" error={formik.errors.code}>
        <TextField
          value={formik.values.code}
          onChange={formik.handleChange('code')}
        />
      </LabeledInput>
      <LabeledInput label="Nome" error={formik.errors.name}>
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
