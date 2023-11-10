import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import React, {useMemo} from 'react';
import {productsApi} from '../api/products';
import {productKeys} from '../react-query/constants';
import {DetailScreenProps} from '../types/navigation';
import {ScrollView, Text, View} from 'react-native';
import FastImage from '../components/FastImage';
import {StyleSheet} from 'react-native';
import theme from '../styles/theme';

function DetailScreen({route}: DetailScreenProps) {
  const queryClient = useQueryClient();
  const {id = 0} = route.params;
  const {isLoading, data} = useQuery(
    productKeys.getProduct(id),
    productsApi.getProduct,
    {
      enabled: !!id,
    },
  );

  const product = useMemo(() => data && data[0], [data]);

  // update
  const updateTitleMutation = useMutation(productsApi.updateProductTitle, {
    onSuccess() {
      queryClient.invalidateQueries(productKeys.getAll);
    },
  });
  //   useEffect(() => {
  //     console.log('detail mount');
  //     return () => {
  //       console.log('detail unmount');
  //     };
  //   }, []);

  if (isLoading) {
    return (
      <View>
        <Text>로딩중..</Text>
      </View>
    );
  }

  if (!product) {
    return null;
  }
  return (
    <ScrollView>
      <View style={productStyles.itemContainer}>
        <View style={productStyles.category}>
          <Text>{product.category}</Text>
        </View>
        <Text style={productStyles.title}>{product.title}</Text>
        <View style={productStyles.imageContainer}>
          <FastImage
            style={{width: 100, height: 100}}
            resizeMode="contain"
            source={{uri: product.image}}
          />
        </View>
        <Text>${product.price}</Text>
        <Text>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

export default DetailScreen;

const productStyles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 30,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
});
