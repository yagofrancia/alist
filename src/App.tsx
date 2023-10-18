import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/root-navigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
