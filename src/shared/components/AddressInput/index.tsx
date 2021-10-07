import React from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {THEME} from '../../theme/index'
import Icon from 'react-native-vector-icons/Feather'
interface props {
    placeHolder?:string
    value?:string
    onChange?:()=>void
    isPassword?:boolean
    isVisible?:boolean
    onPress?:()=>void
}
const AddressInput = (props:props) => {
    return(
        <View style={styles.mainView}>
            <TextInput placeholder={props.placeHolder} autoCapitalize='none' secureTextEntry={props.isVisible} placeholderTextColor={THEME.COLORS.accentBlue} value={props.value} style={styles.input} onChangeText={props.onChange}/>
            { props.isPassword ? 
            props.isVisible ?
            <TouchableOpacity onPress={props.onPress}>
                <Icon name='eye-off' size={20} color={THEME.COLORS.accentBlue}/>
            </TouchableOpacity> 
            : 
            <TouchableOpacity onPress={props.onPress}>
                <Icon name='eye' size={20} color={THEME.COLORS.accentBlue}/>
            </TouchableOpacity> 
            :
            null
            }
            
        </View>
    )
}
const styles=StyleSheet.create({
    mainView:{
        borderColor:THEME.COLORS.accentBlue,
        borderWidth:1,
        width:RFValue(300),
        marginLeft:THEME.MARGIN.NORMAL,
        paddingVertical:THEME.PADDING.NORMAL,
        paddingLeft:THEME.PADDING.LOW,
        borderRadius:THEME.RADIUS.BOX,
        marginBottom:THEME.MARGIN.NORMAL,
        flexDirection:'row'
    },
    input:{width:RFValue(260)}
})
export default AddressInput