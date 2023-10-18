import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamList} from './param-list';
import HomeScreen from '../../screens/home';
import CreateAccountScreen from '../../screens/create-account';
import styles from './styles';

const Stack = createNativeStackNavigator<ParamList>();

export default function RootNavigator() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: styles.wrapper,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    </>
  );
}
