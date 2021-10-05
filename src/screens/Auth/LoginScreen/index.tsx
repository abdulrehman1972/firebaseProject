import React from 'react'
import {View,Text} from 'react-native'
import AddressInput from '../../../shared/components/AddressInput'
import PrimaryButton from '../../../shared/components/PrimaryButton'
import styles from './styles'
const LoginScreen = () => {
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Hello</Text>
            <Text style={styles.descriptionText}>Welcome To FireBase Login</Text>
            <AddressInput placeHolder='Enter Email' />
            <AddressInput placeHolder='Enter Password'/>
            <Text style={styles.forgetText}>forget Password?</Text>
            <View style={styles.buttonContainer}>
            <PrimaryButton title='Login'/>
            </View>
        </View>
    )
}
export default LoginScreen