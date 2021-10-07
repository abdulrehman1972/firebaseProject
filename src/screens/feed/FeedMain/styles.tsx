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
    roundImage1:{
        height:RFValue(42),
        width:RFValue(42),
        borderRadius:RFValue(22),
        borderWidth:1,
        borderColor:THEME.COLORS.accentBlue,
        marginLeft:THEME.MARGIN.LOW
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