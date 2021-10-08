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
    mainContainerDark:{
        flex:1,
        marginTop:THEME.MARGIN.SUPERHIGH,
        paddingHorizontal:THEME.PADDING.LOW,
        backgroundColor:THEME.COLORS.black
    },
    input:{
        borderColor:THEME.COLORS.accentBlue,
        borderWidth:1,
        paddingVertical:THEME.PADDING.SUPERHIGH,
        borderRadius:THEME.RADIUS.BOX,
        paddingLeft:THEME.PADDING.LOW,
        fontSize:THEME.FONTS.SIZE.LARGE
    },
    inputDark:{
        borderColor:THEME.COLORS.red,
        borderWidth:1,
        paddingVertical:THEME.PADDING.SUPERHIGH,
        borderRadius:THEME.RADIUS.BOX,
        paddingLeft:THEME.PADDING.LOW,
        fontSize:THEME.FONTS.SIZE.LARGE,
        color:THEME.COLORS.red,
    },
    indicatorStyle:{
        position:'absolute',
        marginTop:RFValue(300),
        marginLeft:RFValue(170)
    },
    fontColor:{
        color:THEME.COLORS.accentBlue
    },
    fontColorDark:{
        color:THEME.COLORS.red
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