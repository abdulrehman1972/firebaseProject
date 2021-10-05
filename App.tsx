/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { THEME } from './src/shared/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import LoginScreen from './src/screens/Auth/LoginScreen';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
const App: () => Node = () => {
  const [isLogin,setLogin]=useState(true)
  const [isSignUp,setSignUp]=useState(false)
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.sectionContainer}>
      <TouchableOpacity style={styles.touchView} onPress={()=>{setLogin(true);setSignUp(false)}}>
        <View>
          <Text style={styles.tabText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchView} onPress={()=>{setLogin(false);setSignUp(true)}}>
        <View>
          <Text style={styles.tabText}>SignUp</Text>
        </View>
      </TouchableOpacity>
    </View>
    {isLogin && <LoginScreen/> }
    { isSignUp && <SignUpScreen/>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    flexDirection:'row',
    justifyContent:'center',
  },
  safeAreaView:{
    flex:1
  },
  touchView:{
    backgroundColor:THEME.COLORS.accentBlue,
    paddingVertical:THEME.PADDING.LOW,
    borderColor:THEME.COLORS.white,
    borderWidth:1,
    width:RFValue(100)
  },
  tabText:{
    textAlign:'center',
    color:THEME.COLORS.white
  },
});

export default App;
