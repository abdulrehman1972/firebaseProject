/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/Auth/Auth.routes';
const App: () => Node = () => {
  
  return (
   <NavigationContainer>
     <AuthStack/>
   </NavigationContainer>
  );
};


export default App;
