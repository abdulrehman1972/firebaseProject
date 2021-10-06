import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,StyleProp,TextStyle,} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { THEME } from '../../theme'
interface props {
    fontColor?:StyleProp<TextStyle>;
    title?:string;
    onPress?:()=>void
}
const ImagePickerButton = (props:props) => {
    return(
        <TouchableOpacity style={styles.touchView} onPress={props.onPress}>
            <View>
                <Text style={[styles.buttonTitle,props.fontColor]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    touchView:{
        shadowOffset: {  height: 10 },  
        shadowColor: THEME.COLORS.lightGrey,  
        shadowOpacity: 1,
        elevation:RFValue(10),
        height:RFValue(40),
        justifyContent:'center',
        paddingLeft:THEME.PADDING.LOW,
        backgroundColor:THEME.COLORS.white,
        marginTop:THEME.MARGIN.LOW,
        borderRadius:THEME.RADIUS.BOX
    },
    buttonTitle:{
        fontSize:THEME.FONTS.SIZE.XXXSMALL
    },
})
export default ImagePickerButton