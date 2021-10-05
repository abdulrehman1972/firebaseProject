import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {THEME} from '../../theme/index'
interface props {
    placeHolder?:string
}
const AddressInput = (props:props) => {
    return(
        <View style={styles.mainView}>
            <TextInput placeholder={props.placeHolder} placeholderTextColor={THEME.COLORS.accentBlue}/>
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
        marginBottom:THEME.MARGIN.NORMAL
    },
})
export default AddressInput