import React from 'react';
import {Text, View} from 'react-native';
import {CreateAccountScreenProps} from '../../navigation/root-navigator/param-list';
import ScreenContainer from '../../components/organisms/screen-container';

export default function CreateAccountScreen({
  route: _r,
}: CreateAccountScreenProps) {
  return (
    <ScreenContainer title="Inserir Conta" rightIcon="ic_add">
      <View>
        <Text>create account screen</Text>
      </View>
    </ScreenContainer>
  );
}
