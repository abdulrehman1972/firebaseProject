/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushController from './src/screens/PushNotification';
import React from 'react';
const First = () => {
  return (
    <>
      <App />
      <PushController />
    </>
  );
};

AppRegistry.registerComponent(appName, () => First);
