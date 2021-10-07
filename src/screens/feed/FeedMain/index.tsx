import React,{useEffect,useState} from 'react'
import {View,Text,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native'
import { ICONS } from '../../../assets'
import AddFeedButton from '../../../shared/components/AddFeedButton'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import FeedCard from '../../../shared/components/FeedCard'
import firestore from '@react-native-firebase/firestore';
var data = [];
const FeedMain = () => {
    const [responseArray,setResponseArray]=useState([])
    useEffect(()=>{
        fromFirebase()
    },[])
    const fromFirebase = async() => {
       await firestore().collection('Users').onSnapshot((d)=>{
        data = d._docs;
       setResponseArray(data)
        return;
       });
       
        // 
    }
   
    const navigation=useNavigation()
    return(
        <ScrollView>
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.roundImage1}>
        <Image source={ICONS.USER_PROFILE} style={styles.roundImage} resizeMode='contain'/>
        </TouchableOpacity>
            <AddFeedButton onPress={()=>navigation.navigate('AddFeed')}/>
        </View>
        <View style={styles.secondary}>
            {data && data.length > 0 && data.map((item,i)=>(
                <FeedCard uri={item['_data'].fileUri} postContent={item['_data'].textStatus} />
            ))}
        </View>
        <View style={styles.emptyView}></View>
        </ScrollView>
    )
}
export default FeedMain