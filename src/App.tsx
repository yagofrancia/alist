import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/root-navigator';
import GlobalComponents from './components/organisms/global-components';
import NavigatorWrapper from './navigation/root-navigator/navigator-wrapper';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigatorWrapper>
        <RootNavigator />
      </NavigatorWrapper>
      <GlobalComponents />
    </NavigationContainer>
  );
}

export default App;
