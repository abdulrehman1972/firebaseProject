import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { THEME } from '../../../shared/theme'
const styles=StyleSheet.create({
    mainContainer:{
        marginTop:THEME.MARGIN.SUPERHIGH,
        PaddingLeft:THEME.PADDING.NORMAL,
        flexDirection:'row'
    },
    roundImage:{
        height:RFValue(40),
        width:RFValue(40),
        borderRadius:RFValue(20),
    },
    scroll:{
        backgroundColor:THEME.COLORS.white
    },
    scrollDark:{
        backgroundColor:THEME.COLORS.black
    },
    roundImageDark:{
        height:RFValue(40),
        width:RFValue(40),
        borderRadius:RFValue(20),
        tintColor:THEME.COLORS.white
    },
    roundImage1:{
        height:RFValue(42),
        width:RFValue(42),
        borderRadius:RFValue(22),
        borderWidth:1,
        borderColor:THEME.COLORS.accentBlue,
        marginLeft:THEME.MARGIN.LOW
    },
    roundImage1Dark:{
        height:RFValue(42),
        width:RFValue(42),
        borderRadius:RFValue(22),
        borderWidth:1,
        borderColor:THEME.COLORS.red,
        marginLeft:THEME.MARGIN.LOW
    },
    menu:{
        marginTop:THEME.MARGIN.LOW,
        marginLeft:THEME.MARGIN.NOVAHIGH
    },
    secondary:{
        flex:1,
        paddingTop:THEME.PADDING.NORMAL,
        paddingLeft:THEME.PADDING.NORMAL
    },
    emptyView:{
        height:RFValue(20)
    },
    
})
export default styles