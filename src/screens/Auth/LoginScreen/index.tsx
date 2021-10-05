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
    const [isVisible,setVisible]=useState(false)
    const onLogin = () => {
        setVisible(true)
        auth().signInWithEmailAndPassword(email,password).then(()=>{console.log('Sign in Successful');setVisible(false)}).catch((error)=>{console.log(error);setVisible(false)})
    }
    return(
        <View style={styles.mainContainer}>
            {isVisible && <ActivityIndicator size='large' color={THEME.COLORS.accentBlue} style={styles.indicator}/>}
            <Text style={styles.titleText}>Hello</Text>
            <Text style={styles.descriptionText}>Welcome To FireBase Login</Text>
            <AddressInput placeHolder='Enter Email' value={email} onChange={(text)=>setEmail(text)}/>
            <AddressInput placeHolder='Enter Password' value={password} onChange={(text)=>setPassword(text)}/>
            <Text style={styles.forgetText}>forget Password?</Text>
            <View style={styles.buttonContainer}>
            <PrimaryButton title='Login' onPress={()=>onLogin}/>
            </View>
        </View>
    )
}
export default LoginScreen