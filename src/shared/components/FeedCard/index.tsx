import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/AntDesign'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { THEME } from '../../theme'
import {useSelector} from 'react-redux'
import { RootState } from '../../../shared/store'
interface props {
    uri?:string;
    postContent?:string;
    onPressComment?:()=>void;
    onPressShare?:()=>void;
}
const FeedCard = (props:props) => {
    const [isLike,setLike]=useState(false)
    const isDarkMode =useSelector((state:RootState)=>state.message.isDarkMode)
    return(
        <View style={isDarkMode ? styles.mainContainerDark:styles.mainContainer}>
            <Image source={{uri:props.uri}} style={styles.postImage} resizeMode='cover'/>
            <View style={isDarkMode ? styles.detailViewDark : styles.detailView}>
                <View style={styles.descriptionView}>
            <Text numberOfLines={2} ellipsizeMode='tail'>{props.postContent}</Text>
            </View>
            <View style={styles.reactionView}>
                <TouchableOpacity onPress={()=>setLike(!isLike)}>
                <View style={styles.iconView}>
                    <Icon name='like2' size={25} color={isLike?THEME.COLORS.blue:THEME.COLORS.black}/>
                    <Text style={isLike==true?styles.blueColor:styles.simpleColor}>Like</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onPressComment}>
                <View style={styles.iconView}>
                    <FontIcon name='comment-o' size={25} color={THEME.COLORS.black}/>
                    <Text style={styles.simpleColor}>Comment</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onPressShare}>
                <View style={styles.iconView}>
                    <Icon name='sharealt' size={25} color={THEME.COLORS.black}/>
                    <Text style={styles.simpleColor}>Share</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    iconView:{
        flexDirection:'row'
    },
    reactionView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:THEME.PADDING.LOW
    },
    mainContainer:{
        height:RFValue(250),
        width:RFValue(310),
        borderRadius:RFValue(10),
        flexWrap:'wrap',
        backgroundColor:THEME.COLORS.white,
        shadowOffset: {  height: 10 },  
        shadowOpacity: 0.5,
        elevation:RFValue(10),
        marginTop:THEME.MARGIN.NORMAL
    },
    mainContainerDark:{
        height:RFValue(250),
        width:RFValue(310),
        borderRadius:RFValue(10),
        flexWrap:'wrap',
        backgroundColor:THEME.COLORS.red,
        shadowOffset: {  height: 10 },  
        shadowOpacity: 0.5,
        elevation:RFValue(10),
        marginTop:THEME.MARGIN.NORMAL
    },
    blueColor:{
        color:THEME.COLORS.blue,
        marginTop:THEME.MARGIN.VERYLOW,
        marginLeft:THEME.MARGIN.VERYLOW
    },
    simpleColor:{
        marginTop:THEME.MARGIN.VERYLOW,
        marginLeft:THEME.MARGIN.VERYLOW
    },
    postImage:{
        height:RFValue(190),
        width:RFValue(310),
        borderTopLeftRadius:RFValue(10),
        borderTopRightRadius:RFValue(10)
    },
    detailView:{
        backgroundColor:THEME.COLORS.white,
        width:RFValue(297),
        height:RFValue(40),
        paddingHorizontal:THEME.PADDING.LOW
    },
    detailViewDark:{
        backgroundColor:THEME.COLORS.red,
        width:RFValue(297),
        height:RFValue(40),
        paddingHorizontal:THEME.PADDING.LOW
    },
    descriptionView:{
        height:RFValue(30)
    }
})
export default FeedCard