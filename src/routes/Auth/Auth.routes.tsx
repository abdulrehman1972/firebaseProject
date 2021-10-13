import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/LoginScreen/index';
import SignUpScreen from '../../screens/Auth/SignUpScreen/index';
import AuthTopTab from '../../screens/Auth/TopTab';
import FeedMain from '../../screens/feed/FeedMain';
import AddingPost from '../../screens/feed/AddingPost/index';
import SettingMain from '../../screens/Settings/SettingMain';
import AddComment from '../../screens/feed/AddComment';

const Stack = createNativeStackNavigator();
interface props {}

const AuthStack = (props: props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ImportWallet" component={AuthTopTab} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="FeedMain" component={FeedMain} />
      <Stack.Screen name="AddFeed" component={AddingPost} />
      <Stack.Screen name="SettingMain" component={SettingMain} />
      <Stack.Screen name="AddComment" component={AddComment} />
    </Stack.Navigator>
  );
};

export default AuthStack;
