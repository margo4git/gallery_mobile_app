import {
  View,
  Text,
  FlatList,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryList } from '../slices/gallery';
import { Post } from '../components/Post';

export const GalleryScreen = () => {
  const dispatch = useDispatch();
  const galleryList = useSelector(state => state.gallery.list);
  const isListLoading = useSelector(state => state.gallery.isLoading);

  useEffect(() => {
    dispatch(getGalleryList());
  }, [dispatch, getGalleryList]);

  if (isListLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <>
      <StatusBar animated barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <FlatList
          data={galleryList}
          renderItem={({ item }) => {
            return <Post post={item} />;
          }}
          keyExtractor={item => item.id}
          onEndReached={() => {
            dispatch(getGalleryList());
          }}
          onEndReachedThreshold={1}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
