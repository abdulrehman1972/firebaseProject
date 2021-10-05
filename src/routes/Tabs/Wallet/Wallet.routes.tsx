import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WalletMain from "../../../screens/Wallet/WalletMain";
import CoinDetails from "../../../screens/Wallet/CoinDetails";
import SendCoin from "../../../screens/Wallet/SendCoin";
import CoinInfo from "../../../screens/Wallet/CoinInfo";
import ReceiveCoin from "../../../screens/Wallet/ReceiveCoin";
import TransactionConfirmation from "../../../screens/Wallet/TransactionConfirmation";
import { Linking } from "react-native";
import { GenericNavigation } from "../../../shared/models/types";

interface Props extends GenericNavigation {}

const Stack = createStackNavigator();

const WalletStack = (props: Props) => {
  //--------- Linking Listeners -------- //

  useEffect(() => {
    Linking.getInitialURL()
      .then(ev => {
        if (ev) {
          handelURL({ url: ev });
        }
      })
      .catch(err => console.warn("An error occurred", err));
    Linking.addEventListener("url", handelURL);
    return () => {
      Linking.removeEventListener("url", handelURL);
    };
  }, []);

  const handelURL = (event: { url: string }) => {
    if (event.url.includes("wc:")) {
      if (event.url.includes("bridge")) {
        props.navigation?.navigate("Settings", {
          screen: "WCBridge",
          params: { wcURI: event.url },
        });
      } else {
        console.log("Not a WC Connection Request");
      }
    }
  };
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name='WalletMain' component={WalletMain} />
      <Stack.Screen name='CoinDetails' component={CoinDetails} />
      <Stack.Screen name='CoinInfo' component={CoinInfo} />
      <Stack.Screen name='SendCoin' component={SendCoin} />
      <Stack.Screen name='ReceiveCoin' component={ReceiveCoin} />
      <Stack.Screen name='TxDetails' component={TransactionConfirmation} />
    </Stack.Navigator>
  );
};

export default WalletStack;
