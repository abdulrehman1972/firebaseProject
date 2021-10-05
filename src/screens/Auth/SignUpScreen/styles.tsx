import {StyleSheet} from 'react-native'
import { THEME } from '../../../shared/theme'
const styles=StyleSheet.create({
    mainContainer:{
        paddingTop:THEME.PADDING.NORMAL,
        paddingHorizontal:THEME.PADDING.LOW,
    },
    titleText:{
        fontSize:THEME.FONTS.SIZE.LARGE,
        color:THEME.COLORS.accentBlue,
        marginLeft:THEME.MARGIN.NORMAL,
        marginTop:THEME.MARGIN.NOVAHIGH
    },
    descriptionText:{
        fontSize:THEME.FONTS.SIZE.MEDIUM,
        color:THEME.COLORS.accentBlue,
        marginLeft:THEME.MARGIN.NORMAL,
        marginBottom:THEME.MARGIN.LOW

    },
    forgetText:{
        color:THEME.COLORS.accentBlue,
        textAlign:'right',
        marginRight:THEME.MARGIN.NORMAL
    },
    buttonContainer:{
        paddingHorizontal:THEME.PADDING.SUPERHIGH
    },
})
export default styles