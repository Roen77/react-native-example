import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HomeScreenProps} from '../types/navigation';

function HomeScreen({navigation}: HomeScreenProps) {
  useEffect(() => {
    console.log('mount');
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Detail 화면으로 이동</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
