import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../../screens/Auth/LoginScreen/index'
import SignUpScreen from '../../screens/Auth/SignUpScreen/index'
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='ImportWallet' component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
