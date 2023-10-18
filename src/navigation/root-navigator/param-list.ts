import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ParamList = {
  Home: undefined;
  CreateAccount: undefined;
};

export type CreateAccountScreenProps = NativeStackScreenProps<
  ParamList,
  'CreateAccount'
>;

export type HomeScreenProps = NativeStackScreenProps<ParamList, 'Home'>;
