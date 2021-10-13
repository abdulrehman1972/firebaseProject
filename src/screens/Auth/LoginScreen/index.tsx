import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import AddressInput from '../../../shared/components/AddressInput';
import PrimaryButton from '../../../shared/components/PrimaryButton';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {THEME} from '../../../shared/theme';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  setEm,
  setPass,
  setUserId,
} from '../../../shared/store/Reducer/WalletReducer/WalletReducer';
import {GenericNavigation} from '../../../shared/Modals/types';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface props extends GenericNavigation {}

const LoginScreen = (props: props) => {
  const [email, setEmail] = useState('abdul.rehman@kryptomind.com');
  const [password, setPassword] = useState('03356278648Bsse@');
  const [isVisible, setVisible] = useState(false);
  const [passwordVisible, setPassVisible] = useState(true);
  const navigation = useNavigation();
  const [user, setAsyncUser] = useState({});
  const dispatch = useDispatch();

  const handlePress = async () => {
    let _id = base64.encode(email);
    let userLocal = {id: _id, email: email};
    dispatch(setUserId(_id));
    await AsyncStorage.setItem('user', JSON.stringify(userLocal));
    setAsyncUser(userLocal);
  };

  const onLogin = () => {
    setVisible(true);
    let emailVal = email.search('@');
    if (emailVal > 0) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Sign in Successful');
          setVisible(false);
          Toast.show('Sign in Successful', Toast.LONG);
          dispatch(setEm(email));
          dispatch(setPass(password));
          handlePress();
          navigation.navigate('FeedMain');
        })
        .catch(error => {
          console.log(error);
          setVisible(false);
          Toast.show(error, Toast.LONG);
        });
    }
  };

  return (
    <View style={styles.mainContainer}>
      {isVisible && (
        <ActivityIndicator
          size="large"
          color={THEME.COLORS.accentBlue}
          style={styles.indicator}
        />
      )}
      <Text style={styles.titleText}>Hello</Text>
      <Text style={styles.descriptionText}>Welcome To FireBase Login</Text>
      <AddressInput
        placeholder="Enter Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <AddressInput
        placeholder="Enter Password"
        value={password}
        isPassword
        isVisible={passwordVisible}
        secureTextEntry={passwordVisible}
        onPress={() => setPassVisible(!passwordVisible)}
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.forgetText}>forget Password?</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton title="Login" onPress={() => onLogin()} />
      </View>
    </View>
  );
};
export default LoginScreen;
