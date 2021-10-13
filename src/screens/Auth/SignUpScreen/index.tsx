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
import {GenericNavigation} from '../../../shared/Modals/types';
import {
  setEm,
  setPass,
  setUser,
  setUserId,
} from '../../../shared/store/Reducer/WalletReducer/WalletReducer';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface props extends GenericNavigation {}

const LoginScreen = (props: props) => {
  const [email, setEmail] = useState('abdul.rehman@kryptomind.com');
  const [password, setPassword] = useState('03356278648Bsse@');
  const [confirmPassword, setConfirmPassword] = useState('03356278648Bsse@');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPassVisible, setConfirmPassVisible] = useState(true);
  const [userName, setUserName] = useState('Abdul Rehman');
  const [isVisible, setVisible] = useState(false);
  const [user, setAsyncUser] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePress = async () => {
    let _id = base64.encode(email);
    let userLocal = {id: _id, email: email};
    dispatch(setUserId(_id));
    await AsyncStorage.setItem('user', JSON.stringify(userLocal));
    setAsyncUser(userLocal);
  };

  const onSignUp = () => {
    setVisible(true);
    let emailVal = email.search('@');
    if (password === confirmPassword && emailVal > 0) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          Toast.show('User account created', Toast.SHORT);
          dispatch(setEm(email));
          dispatch(setPass(password));
          dispatch(setUser(userName));
          handlePress();
          navigation.navigate('LoginScreen');
          setVisible(false);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            Toast.show('That email address is already in use!', Toast.SHORT);
            setVisible(false);
          }
          console.error('This is the error ', error);
          Toast.show(error, Toast.SHORT);
          setVisible(false);
        });
    } else {
      Toast.show('This email address is invalid!', Toast.SHORT);
      setVisible(false);
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
      <Text style={styles.descriptionText}>Welcome To FireBase SignUp</Text>
      <AddressInput
        placeholder="Enter Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <AddressInput
        placeholder="Enter UserName"
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <AddressInput
        placeholder="Enter Password"
        value={password}
        isPassword
        isVisible={passwordVisible}
        secureTextEntry={passwordVisible}
        onPress={() => setPasswordVisible(!passwordVisible)}
        onChangeText={text => setPassword(text)}
      />
      <AddressInput
        placeholder="Enter Password Again"
        value={confirmPassword}
        isPassword
        isVisible={confirmPassVisible}
        secureTextEntry={confirmPassVisible}
        onPress={() => setConfirmPassVisible(!confirmPassVisible)}
        onChangeText={text => setConfirmPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton title="Sign Up" onPress={onSignUp} />
      </View>
    </View>
  );
};
export default LoginScreen;
