import React from 'react'
import {View,Text} from 'react-native'
import AddressInput from '../../../shared/components/AddressInput'
import PrimaryButton from '../../../shared/components/PrimaryButton'
import styles from './styles'
const LoginScreen = () => {
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Hello</Text>
            <Text style={styles.descriptionText}>Welcome To FireBase SignUp</Text>
            <AddressInput placeHolder='Enter Email' />
            <AddressInput placeHolder='Enter Password'/>
            <AddressInput placeHolder='Enter Password Again'/>
            <View style={styles.buttonContainer}>
            <PrimaryButton title='Sign Up'/>
            </View>
        </View>
    )
}
export default LoginScreen