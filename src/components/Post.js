import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';
const { width: windowWidth } = Dimensions.get('window');
export const Post = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation();
  const publishDate = dayjs(post.created_at);
  return (
    <Pressable
      onPress={() => {
        navigate('PostDetails', { post });
      }}>
      <View style={styles.blockProfile}>
        <Image
          source={{ uri: post.user.profile_image.medium }}
          style={styles.profileImage}
        />
        <View style={styles.blockInformation}>
          <Text style={styles.username}>{post.user.username}</Text>
          <Text>
            {publishDate.format(
              publishDate.diff(dayjs(), 'year') > 1
                ? 'YYYY MMMM DD HH:mm'
                : 'MMMM DD HH:mm',
            )}
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {isLoading && <ActivityIndicator style={styles.loader} />}
        <Image
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          style={styles.image}
          source={{ uri: post.urls.regular }}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth,
    height: 1.5 * windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    zIndex: 2,
  },
  image: { width: '100%', height: '100%' },
  blockProfile: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  username: { fontSize: 18, fontWeight: 'bold' },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'grey',
  },
  blockInformation: {
    marginLeft: 8,
  },
});
