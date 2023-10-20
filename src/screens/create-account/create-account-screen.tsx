import React from 'react';
import {CreateAccountScreenProps} from '../../navigation/root-navigator/param-list';
import ScreenContainer from '../../components/organisms/screen-container';
import CreateAccountForm from '../../components/organisms/create-account-form';

export default function CreateAccountScreen({route}: CreateAccountScreenProps) {
  const formRef = React.useRef<FormRef>();

  function handleRightIconPress() {
    formRef.current?.submitForm();
  }

  return (
    <ScreenContainer
      title="Inserir Conta"
      rightIcon="ic_check"
      leftIcon="ic_arrow_left"
      onRightIconPress={handleRightIconPress}>
      <CreateAccountForm formRef={formRef} params={route.params} />
    </ScreenContainer>
  );
}
