import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { THEME } from '../../../shared/theme'
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        marginTop:THEME.MARGIN.SUPERHIGH,
        paddingHorizontal:THEME.PADDING.LOW,
        backgroundColor:THEME.COLORS.white
    },
    input:{
        borderColor:THEME.COLORS.accentBlue,
        borderWidth:1,
        paddingVertical:THEME.PADDING.SUPERHIGH,
        borderRadius:THEME.RADIUS.BOX,
        paddingLeft:THEME.PADDING.LOW,
        fontSize:THEME.FONTS.SIZE.LARGE
    },
    fontColor:{
        color:THEME.COLORS.accentBlue
    },
    imagePickerPath:{ 
        width: RFValue(330), 
        height: RFValue(180),
        marginTop:THEME.MARGIN.NORMAL
    },
    back:{
        height:RFValue(40),
        width:RFValue(40)
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
})
export default styles