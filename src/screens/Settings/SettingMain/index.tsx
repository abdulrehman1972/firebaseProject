import React, { useState } from "react";
import { View, Switch,Text,TouchableOpacity} from "react-native";
import styles from './styles'
import {useDispatch,useSelector} from 'react-redux'
import { RootState } from "../../../shared/store";
import { setDarkMode } from "../../../shared/store/Reducer/WalletReducer/WalletReducer";
import { GenericNavigation } from "../../../shared/Modals/types";
import Icon from 'react-native-vector-icons/Ionicons'
import {THEME} from '../../../shared/theme'
import { SafeAreaView } from "react-native-safe-area-context";
interface props extends GenericNavigation{}
const SettingMain = (props:props) => {
    const dispatch=useDispatch()
    const isDarkMode=useSelector((state:RootState)=>state.message.isDarkMode)
  return (
    <SafeAreaView style={styles.primary}>
    <TouchableOpacity onPress={()=>props?.navigation?.goBack()}>
      <Icon name='arrow-back' size={30} color={THEME.COLORS.black}/>
    </TouchableOpacity>
    <View style={styles.mainContainer}>
        <Text>Dark Mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>dispatch(setDarkMode(!isDarkMode))}
        value={isDarkMode}
      />
    </View>
    </SafeAreaView>
  );
}



export default SettingMain;