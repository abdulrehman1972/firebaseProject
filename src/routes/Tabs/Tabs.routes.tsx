import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsStack from "./Settings/Settings.routes";
import WalletStack from "./Wallet/Wallet.routes";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import CustomBottomTabBar from "../../shared/components/CustomBottomTabBar";
import SwapStack from "./Swap/Swap.routes";
import NewsStack from "./News/News.routes";
import DAppsStack from "./DApps/DApps.routes";
//Push Notifications
import messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";
import NotificationPopup from "react-native-push-notification-popup";
import { ICONS } from "../../assets";
import { GenericNavigation } from "../../shared/models/types";
import { Platform } from "react-native";

// AppRegistry.registerHeadlessTask(
//   "RNFirebaseBackgroundMessage",
//   messaging().setBackgroundMessageHandler(remoteMessage => {
//     const data = remoteMessage.data;
//     console.log(data);
//   })
// );

const Tab = createBottomTabNavigator();

const BottomTabs = (props: GenericNavigation) => {
  const { wc } = useSelector((state: RootState) => state);

  let popup = useRef<NotificationPopup>(null);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(
      async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) =>
        handleLocalNotification(remoteMessage)
    );

    return unsubscribe;
  }, []);

  const handleLocalNotification = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage
  ) => {
    popup.current!.show({
      //onPress: () => {},
      appIconSource: ICONS.LOGO,
      appTitle: "CryptoKara",
      title: remoteMessage.notification!.title,
      body: remoteMessage.notification!.body,
      slideOutTime: 3000,
    });
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName='Wallet'
        tabBarOptions={{ keyboardHidesTabBar: true }}
        tabBar={props => <CustomBottomTabBar {...props} />}
      >
        {Platform.OS !== "ios" && (
          <Tab.Screen name='DApps' component={DAppsStack} />
        )}
        <Tab.Screen name='News' component={NewsStack} />
        <Tab.Screen name='Wallet' component={WalletStack} />
        <Tab.Screen name='Swap' component={SwapStack} />
        <Tab.Screen name='Settings' component={SettingsStack} />
      </Tab.Navigator>
      <NotificationPopup ref={popup} />
    </>
  );
};

export default BottomTabs;
