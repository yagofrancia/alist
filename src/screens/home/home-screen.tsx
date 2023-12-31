import React from 'react';
import ScreenContainer from '../../components/organisms/screen-container';
import {HomeScreenProps} from '../../navigation/root-navigator/param-list';
import Accounts from '../../components/organisms/accounts';
import SearchBar from '../../components/molecules/search-bar';

export default function HomeScreen({navigation}: HomeScreenProps) {
  function handleRightIconPress() {
    navigation.navigate('CreateAccount');
  }

  return (
    <ScreenContainer
      title="Plano de Contas"
      leftIcon={null}
      rightIcon="ic_add"
      onRightIconPress={handleRightIconPress}>
      <SearchBar />
      <Accounts />
    </ScreenContainer>
  );
}
