import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { GalleryScreen } from './screens/GalleryScreen';
import { PostDetailsScreen } from './screens/PostDetailsScreen';
import { enableScreens } from 'react-native-screens';

enableScreens(true);

const Stack = createStackNavigator();
export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen
          options={{
            headerShown: false,
            gestureDirection: 'vertical',
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
          }}
          name="PostDetails"
          component={PostDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
