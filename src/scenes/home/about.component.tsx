import React from 'react';
import { HomeScreenProps } from '../../navigation/home.navigator';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AppRoute } from '../../navigation/app-routes';

declare const global: {HermesInternal: null | {}};

export const AboutScreen = (props: HomeScreenProps): React.ReactElement => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>About</Text>
      <SafeAreaView>
        <Button
          onPress={() => { props.navigation.navigate(AppRoute.HOME) }}
          title="Home"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => { props.navigation.goBack() }}
          title="Back"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});