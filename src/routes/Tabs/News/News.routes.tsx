import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewsMain from "../../../screens/News/NewsMain";
import NewsDetails from "../../../screens/News/NewsDetails";

const Stack = createStackNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name='NewsMain' component={NewsMain} />
      <Stack.Screen name='NewsDetail' component={NewsDetails} />
    </Stack.Navigator>
  );
};

export default NewsStack;
