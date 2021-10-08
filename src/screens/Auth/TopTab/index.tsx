import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {GenericNavigation} from '../../../shared/Modals/types';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignUpScreen';
import styles from './styles';

interface props extends GenericNavigation {}
const AuthTopTab = (props: props) => {
  const [selectedTab, setSelectedTab] = useState('login');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={styles.touchView}
          onPress={() => {
            setSelectedTab('login');
          }}>
          <View>
            <Text style={styles.tabText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchView}
          onPress={() => {
            setSelectedTab('signup');
          }}>
          <View>
            <Text style={styles.tabText}>SignUp</Text>
          </View>
        </TouchableOpacity>
      </View>

      {selectedTab == 'login' ? <LoginScreen /> : <SignUpScreen />}
    </SafeAreaView>
  );
};

export default AuthTopTab;
