import {FlatList, ListRenderItem} from 'react-native';
import ProductItem from './ProductItem';
import {productKeys} from '../react-query/constants';
import {productsApi} from '../api/products';
import {useInfiniteQuery} from '@tanstack/react-query';
import {useCallback, useMemo} from 'react';
import React from 'react';
import {Product} from '../types/products';

function ProductList() {
  const {isLoading, data, isFetchingNextPage, fetchNextPage, hasNextPage} =
    useInfiniteQuery(productKeys.getAll, productsApi.getAll, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage && lastPage.length === 0) {
          return;
        }
        return pages.length + 1;
      },
    });
  //   useEffect(() => {
  //     console.log('mount');
  //     return () => {
  //       console.log('unmount');
  //     };
  //   }, []);

  const productList = useMemo(() => (data?.pages || []).flat(), [data?.pages]);

  const renderItem: ListRenderItem<Product> = useCallback(
    ({item}) => <ProductItem item={item} />,
    [],
  );

  const onEndReached = () => {
    if (isFetchingNextPage) {
      return;
    }
    hasNextPage && fetchNextPage();
  };

  if (isLoading) {
    return null;
  }

  return (
    <FlatList
      scrollIndicatorInsets={{right: 0.1}}
      removeClippedSubviews
      windowSize={5}
      scrollEventThrottle={16}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
      keyExtractor={(_, index) => index.toString()}
      data={productList || []}
      renderItem={renderItem}
    />
  );
}

export default ProductList;
