import React,{useState} from 'react'
import {View,Text,ActivityIndicator} from 'react-native'
import AddressInput from '../../../shared/components/AddressInput'
import PrimaryButton from '../../../shared/components/PrimaryButton'
import styles from './styles'
import auth from '@react-native-firebase/auth';
import { THEME } from '../../../shared/theme'
const LoginScreen = () => {
    const [email,setEmail]=useState('abdul.rehman@kryptomind.com')
    const [password,setPassword]=useState('03356278648Bsse@')
    const [confirmPassword,setConfirmPassword]=useState('03356278648Bsse@')
    const [isVisible,setVisible]=useState(false)
    const onSignUp = () => {
        setVisible(true)
        if(password===confirmPassword){
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User account created & signed in!');
              setVisible(false)
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                setVisible(false)
              }
          
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                setVisible(false)
              }
          
              console.error('This is the error ',error);
              setVisible(false)
            });
    }
    }
    return(
        <View style={styles.mainContainer}>
            {isVisible && <ActivityIndicator size='large' color={THEME.COLORS.accentBlue} style={styles.indicator}/>}
            <Text style={styles.titleText}>Hello</Text>
            <Text style={styles.descriptionText}>Welcome To FireBase SignUp</Text>
            <AddressInput placeHolder='Enter Email' value={email} onChange={(text)=>setEmail(text)}/>
            <AddressInput placeHolder='Enter Password' value={password} onChange={(text)=>setPassword(text)}/>
            <AddressInput placeHolder='Enter Password Again' value={confirmPassword} onChange={(text)=>setConfirmPassword(text)}/>
            <View style={styles.buttonContainer}>
            <PrimaryButton title='Sign Up' onPress={onSignUp}/>
            </View>
        </View>
    )
}
export default LoginScreen