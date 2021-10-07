import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { THEME } from '../../theme'
interface props {
    onPress: ()=>void
}
const AddFeedButton = (props:props) => {
    return(
        <TouchableOpacity style={styles.touchView} onPress={props.onPress}>
            <View>
                <Text>What's on your mind?</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    touchView:{
        width:RFValue(180),
        borderWidth:0.5,
        height:RFValue(30),
        borderColor:THEME.COLORS.accentBlue,
        justifyContent:'center',
        marginLeft:THEME.MARGIN.LOW,
        marginTop:THEME.MARGIN.LOW,
        borderRadius:THEME.RADIUS.OVAL,
        paddingLeft:THEME.PADDING.VERYLOW
    }
})
export default AddFeedButton