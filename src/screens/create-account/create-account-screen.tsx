import React from 'react';
import {Text, View} from 'react-native';
import {CreateAccountScreenProps} from '../../navigation/root-navigator/param-list';
import ScreenContainer from '../../components/organisms/screen-container';

export default function CreateAccountScreen({
  route: _r,
}: CreateAccountScreenProps) {
  return (
    <ScreenContainer
      title="Inserir Conta"
      rightIcon="ic_check"
      leftIcon="ic_arrow_left">
      <View>
        <Text>create account screen</Text>
      </View>
    </ScreenContainer>
  );
}
