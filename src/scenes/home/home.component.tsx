import React from 'react';
import { HomeScreenProps } from '../../navigation/home.navigator';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Alert,
  View
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AppRoute } from '../../navigation/app-routes';
import { SearchBar } from './components/search-bar.component';
import { ProductListItems } from './components/product-list-items.component';
import { SummaryResult } from './components/summary-result.component';

declare const global: {HermesInternal: null | {}};

export const HomeScreen = (props: HomeScreenProps): React.ReactElement => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
          <SearchBar />
        </View>
        <View style={{ flex: 0.7 }}>
          <ProductListItems />
        </View>
        <View style={{ flex: 0.2 }}>
          <SummaryResult />
        </View>
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