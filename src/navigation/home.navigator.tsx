import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { AppRoute } from './app-routes';
import { HomeScreen, AboutScreen } from '../scenes/home';
import { AppNavigatorParams } from './app.navigator';

type HomeNavigatorParams = AppNavigatorParams & {
  [AppRoute.HOME]: undefined;
}

export interface HomeScreenProps {
  navigation: StackNavigationProp<HomeNavigatorParams, AppRoute.HOME>;
  route: RouteProp<HomeNavigatorParams, AppRoute.HOME>;
}

const Stack = createStackNavigator<HomeNavigatorParams>();

export const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.HOME} component={HomeScreen}/>
    <Stack.Screen name={AppRoute.ABOUT} component={AboutScreen}/>
  </Stack.Navigator>
);

