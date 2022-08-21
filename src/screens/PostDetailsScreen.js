import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import closeIcon from './../assets/images/close-white.png';
export const PostDetailsScreen = ({
  route: {
    params: { post },
  },
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { goBack } = useNavigation();

  return (
    <>
      <StatusBar animated barStyle="light-content" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={() => goBack()}>
          <Image source={closeIcon} />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: post.urls.full }}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator color="white" />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  closeButton: {
    padding: 4,
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: 16,
  },
});
