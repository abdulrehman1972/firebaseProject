import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsMain from "../../../screens/Settings/SettingsMain";
import SelectionScreen from "../../../screens/Settings/SelectionScreen";
import BackupPhrase from "../../../screens/Settings/BackupPhrase";
import WalletManagement from "../../../screens/Settings/WalletManagement";
import SetupPin from "../../../screens/Settings/SetupPin";
import ChangePin from "../../../screens/Generic/ChangePin";
import ExportWallet from "../../../screens/Settings/ExportWallet/Index";
import AddressBook from "../../../screens/Settings/AddressBook";
import AddContact from "../../../screens/Settings/AddContact";
import SecurityDetails from "../../../screens/Settings/SecurityDetails";
import WalletConnectUI from "../../../screens/Settings/WalletConnectUI";
import WalletConnectRequest from "../../../screens/Settings/WalletConnectRequest";
import WalletConnectBridge from "../../../screens/Settings/WalletConnectBridge";
const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SettingsMain' component={SettingsMain} />
      <Stack.Screen name='WalletManagement' component={WalletManagement} />
      <Stack.Screen name='BackupPhrase' component={BackupPhrase} />
      <Stack.Screen name='SelectionScreen' component={SelectionScreen} />
      <Stack.Screen name='SetupPin' component={SetupPin} />
      <Stack.Screen name='SetNewPin' component={ChangePin} />
      <Stack.Screen name='ExportWallet' component={ExportWallet} />
      <Stack.Screen name='SecurityDetails' component={SecurityDetails} />
      <Stack.Screen name='AddressBook' component={AddressBook} />
      <Stack.Screen name='AddContact' component={AddContact} />
      <Stack.Screen name='WalletConnect' component={WalletConnectUI} />
      <Stack.Screen name='WCRequest' component={WalletConnectRequest} />
      <Stack.Screen name='WCBridge' component={WalletConnectBridge} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
