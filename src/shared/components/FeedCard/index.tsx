import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,StyleProp,TextStyle} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { ICONS } from '../../../assets'
import { THEME } from '../../theme'
interface props {
    uri?:string;
    postContent?:string;
    onPressComment?:()=>void;
    onPressShare?:()=>void;
}
const FeedCard = (props:props) => {
    const [isLike,setLike]=useState(false)
    return(
        <View style={styles.mainContainer}>
            <Image source={{uri:props.uri}} style={styles.postImage} resizeMode='cover'/>
            <View style={styles.detailView}>
                <View style={styles.descriptionView}>
            <Text numberOfLines={2} ellipsizeMode='tail'>{props.postContent}</Text>
            </View>
            <View style={styles.reactionView}>
                <TouchableOpacity onPress={()=>setLike(!isLike)}>
                <View><Text style={isLike==true?styles.blueColor:null}>Like</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onPressComment}>
                <View><Text>Comment</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onPressShare}>
                <View><Text>Share</Text></View>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
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
    blueColor:{
        color:THEME.COLORS.blue
    },
    postImage:{
        height:RFValue(190),
        width:RFValue(310),
        borderTopLeftRadius:RFValue(10),
        borderTopRightRadius:RFValue(10)
    },
    detailView:{
        backgroundColor:'white',
        width:RFValue(297),
        height:RFValue(40),
        paddingHorizontal:THEME.PADDING.LOW
    },
    descriptionView:{
        height:RFValue(30)
    }
})
export default FeedCard