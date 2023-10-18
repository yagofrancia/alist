import React from 'react';
import ScreenContainer from '../../components/organisms/screen-container';
import {HomeScreenProps} from '../../navigation/root-navigator/param-list';
import {Button} from 'react-native';

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <ScreenContainer title="Plano de Contas" rightIcon="ic_add">
      <Button
        title="(dev) nav to create account screen"
        // rightIcon=""
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}
      />
      {/* <SearchBar /> */}
      {/* <AccountList /> */}
    </ScreenContainer>
  );
}
