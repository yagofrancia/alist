import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/root-navigator';
import GlobalComponents from './components/organisms/global-components';
import NavigatorWrapper from './navigation/root-navigator/navigator-wrapper';
import {AccountProvider} from './contexts/account-context';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <NavigatorWrapper>
          <AccountProvider>
            <RootNavigator />
          </AccountProvider>
        </NavigatorWrapper>
        <GlobalComponents />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
