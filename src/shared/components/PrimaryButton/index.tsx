import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { THEME } from '../../theme'
interface props {
    title?:string
}
const PrimaryButton = (props:props) => {
    return(
        <View> 
            <TouchableOpacity style={styles.touchView}>
                <View>
                    <Text style={styles.touchText}>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    touchView:{
        backgroundColor:THEME.COLORS.accentBlue,
        paddingVertical:THEME.PADDING.LOW,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:THEME.MARGIN.NORMAL,
        borderRadius:THEME.RADIUS.BOX
    },
    touchText:{
        color:THEME.COLORS.white
    },
})
export default PrimaryButton