/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Entype from 'react-native-vector-icons/Entypo';

// Screens
import HomeScreen from './src/screens/Home'
import SearchResultsScreen from './src/screens/SearchResults'
// Components
import Post from './src/components/Post'
// Data
import feed from './assets/data/feed'

const post1 = feed[0]

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1}/> */}
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
