import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import LabeledInput from '../../molecules/labeled-input/labeled-input';
import Select from '../../molecules/select';
import TextField from '../../molecules/text-field/text-field';
import {useFormik} from 'formik';
import useAccounts from '../../../hooks/use-accounts';
import * as yup from 'yup';
import AccountService from '../../../services/account-service';
import {useNavigation} from '@react-navigation/native';
import TextService from '../../../services/text-service';

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
  params?: {
    name: string;
    code: string;
    isRevenue: boolean;
    launch: boolean;
    parentCode: string;
  };
};

export default function CreateAccountForm({
  formRef,
  params,
}: CreateAccountFormProps) {
  const {flattenedAccounts, accounts, updateAccount, createAccount} =
    useAccounts();
  const isEdit = !!params;
  const navigation = useNavigation();
  const originalAccount = React.useRef(params);
  const formik = useFormik<FormShape>({
    initialValues: {
      parentAccount: isEdit ? params?.parentCode : '',
      code: isEdit ? params.code : '',
      name: isEdit ? params.name : '',
      isRevenue: isEdit ? params.isRevenue : false,
      launch: isEdit ? params.isRevenue : false,
    },
    onSubmit: handleSubmit,
    validationSchema: formValidationSchema,
    validateOnChange: false,
    validate: handleValidate,
  });

  React.useImperativeHandle(formRef, () => {
    return {
      submitForm: formik.submitForm,
    };
  });

  function handleValidate() {
    const errors = {} as {code: string; isRevenue: string; launch: string};
    const code = formik.values.code;
    const node = AccountService.getNodeById(
      accounts.children ?? {},
      formik.values.code.split('.'),
    );

    if (
      !isEdit &&
      flattenedAccounts.some(account => account.code.join('.') === code)
    ) {
      errors.code = 'Código já existente';
    }

    if (
      !!formik.values.parentAccount &&
      AccountService.getNodeById(
        accounts.children ?? {},
        formik.values.parentAccount.split('.'),
      ).isRevenue !== formik.values.isRevenue
    ) {
      errors.isRevenue = 'A conta filha e pai devem ser do mesmo tipo';
    }

    if (
      !formik.values.parentAccount &&
      formik.values.code.split('.').length > 1
    ) {
      errors.code = 'Para criar uma conta filha, selecione uma conta pai';
    }

    if (
      !TextService.startsWith(formik.values.code, formik.values.parentAccount)
    ) {
      errors.code = `O código deve iniciar com ${formik.values.parentAccount}`;
    }

    if (
      isEdit &&
      originalAccount.current?.isRevenue !== formik.values.isRevenue &&
      node.children
    ) {
      errors.isRevenue =
        'Não é possível alterar o tipo para uma conta com subcontas';
    }

    if (isEdit && formik.values.launch && node.children) {
      errors.launch =
        'Essa conta já possui subcontas, não pode aceitar lançamentos';
    }

    return errors;
  }

  function handleSubmit() {
    if (isEdit) {
      updateAccount({
        code: formik.values.code,
        name: formik.values.name,
        isRevenue: formik.values.isRevenue,
        launch: formik.values.launch,
      });
      navigation.goBack();
      return;
    }

    createAccount({
      parentAccount: formik.values.parentAccount,
      code: formik.values.code,
      name: formik.values.name,
      isRevenue: formik.values.isRevenue,
      launch: formik.values.launch,
    });

    navigation.goBack();
  }

  function handlePickerChange(fieldName: keyof FormShape) {
    return function (value: boolean | string) {
      formik.setFieldValue(fieldName, value);
    };
  }

  function handleParentAccountChange(value: string | boolean) {
    formik.setFieldValue('parentAccount', value);

    const {parent, children} = AccountService.suggestNodes(
      (value as string).split('.'),
      accounts.children ?? {},
    );

    formik.setValues({
      ...formik.values,
      code: children.join('.'),
      parentAccount: parent.join('.'),
    });
  }

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LabeledInput label="Conta pai">
          <Select
            onChange={handleParentAccountChange}
            value={formik.values.parentAccount}
            editable={!isEdit}>
            <Select.Item value="" label="Nenhuma" />
            {flattenedAccounts
              .filter(account => !account.launch)
              .map(account => {
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
            placeholder="Insira um código"
            editable={!isEdit}
          />
        </LabeledInput>
        <LabeledInput label="Nome" error={formik.errors.name}>
          <TextField
            value={formik.values.name}
            onChange={formik.handleChange('name')}
            placeholder="Exemplo: Taxa condominial..."
          />
        </LabeledInput>
        <LabeledInput label="Tipo" error={formik.errors.isRevenue}>
          <Select
            onChange={handlePickerChange('isRevenue')}
            value={formik.values.isRevenue}>
            <Select.Item value={true} label="Receita" />
            <Select.Item value={false} label="Custo" />
          </Select>
        </LabeledInput>
        <LabeledInput label="Aceita lançamentos" error={formik.errors.launch}>
          <Select
            onChange={handlePickerChange('launch')}
            value={formik.values.launch}>
            <Select.Item value={false} label="Não" />
            <Select.Item value={true} label="Sim" />
          </Select>
        </LabeledInput>
      </ScrollView>
    </View>
  );
}
