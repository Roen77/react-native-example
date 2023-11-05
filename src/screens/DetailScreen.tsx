import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

function DetailScreen() {
  useEffect(() => {
    console.log('detail mount');
    return () => {
      console.log('detail unmount');
    };
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
    </View>
  );
}

export default DetailScreen;
