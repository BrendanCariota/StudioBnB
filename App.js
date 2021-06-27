/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Entype from 'react-native-vector-icons/Entypo';
import Router from './src/navigation/router';

import { withAuthenticator } from 'aws-amplify-react-native'


const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
