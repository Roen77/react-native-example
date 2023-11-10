import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenStackProps} from 'react-native-screens';

type RootStackParamList = {
  Main: undefined;
  Detail: {id: number};
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type DetailScreenProps = ScreenStackProps<RootStackParamList, 'Detail'>;
