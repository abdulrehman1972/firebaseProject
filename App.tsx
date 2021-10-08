/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/routes/Auth/Auth.routes';
import {Provider} from 'react-redux';
import {store} from './src/shared/store';
interface props {}
const App = (props: props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
