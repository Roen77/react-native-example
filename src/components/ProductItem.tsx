import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Product} from '../types/products';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';
import theme from '../styles/theme';
import React from 'react';
import FastImage from './FastImage';
type Props = {
  item: Product;
};

function ProductItem({item}: Props) {
  console.log('item:', `${item.id}`);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateDetail = () => {
    navigation.navigate('Detail', {
      id: item.id,
    });
  };
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={navigateDetail}
      key={item.id}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.imageContainer}>
        <FastImage
          style={{width: 30, height: 30}}
          resizeMode="contain"
          source={{uri: item.image}}
        />
        <View style={styles.description}>
          <Text>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ProductItem);

export const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 3,
    borderColor: `${theme.darkBlue}`,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  category: {
    backgroundColor: `${theme.lightBlue}`,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  imageContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    flexShrink: 1,
    paddingLeft: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
});
