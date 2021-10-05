import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DAppsMain from "../../../screens/DApps/DAppsMain";
import DAppsBrowser from "../../../screens/DApps/DAppsBrowser";

const Stack = createStackNavigator();

const DAppsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name='DAppsMain' component={DAppsMain} />
      <Stack.Screen name='DAppsBrowser' component={DAppsBrowser} />
    </Stack.Navigator>
  );
};

export default DAppsStack;
