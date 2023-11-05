type RootStackParamList = {
  Main: undefined;
  Detail: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Detail'
>;
export type HomeScreenProps = NativeStackScreenProps<MainTabParamList, 'Home'>;
