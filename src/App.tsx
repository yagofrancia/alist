import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/root-navigator';
import GlobalComponents from './components/organisms/global-components';
import NavigatorWrapper from './navigation/root-navigator/navigator-wrapper';
import {AccountProvider} from './contexts/account-context';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigatorWrapper>
        <AccountProvider>
          <RootNavigator />
        </AccountProvider>
      </NavigatorWrapper>
      <GlobalComponents />
    </NavigationContainer>
  );
}

export default App;
