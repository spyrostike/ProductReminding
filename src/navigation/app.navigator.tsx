import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { HomeNavigator } from './home.navigator'

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  [AppRoute.HOME]: undefined;
  [AppRoute.ABOUT]: undefined;
}

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (props: Partial<StackNavigatorProps>): React.ReactElement => {
  return (
    <>
      <Stack.Navigator {...props} headerMode='none'>
        <Stack.Screen name={AppRoute.HOME} component={HomeNavigator}/>
      </Stack.Navigator>
    </>
  )
}
