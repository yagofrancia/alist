import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ParamList = {
  Home: undefined;
  CreateAccount?: {
    name: string;
    code: string;
    isRevenue: boolean;
    launch: boolean;
    parentCode: string;
  };
};

export type CreateAccountScreenProps = NativeStackScreenProps<
  ParamList,
  'CreateAccount'
>;

export type HomeScreenProps = NativeStackScreenProps<ParamList, 'Home'>;

export const useHomeNavigation = useNavigation<HomeScreenProps['navigation']>;
