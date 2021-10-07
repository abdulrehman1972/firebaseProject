import React,{useState} from 'react'
import {View,Text,TextInput,Image,TouchableOpacity,Button} from 'react-native'
import ImagePickerButton from '../../../shared/components/ImagePickerButton'
import { THEME } from '../../../shared/theme'
import styles from './styles'
import {launchCamera,launchImageLibrary} from 'react-native-image-picker'
import { ICONS } from '../../../assets'
import { useNavigation } from '@react-navigation/core'
import firestore from '@react-native-firebase/firestore';
const AddingPost = () => {
    const [filePth,setFilePath]=useState('')
    const [fileData,setFileData]=useState('')
    const [fileUri,setFileUri]=useState('')
    const [textStatus,setTextStatus]=useState('')
    const navigation=useNavigation()
    const cameraLaunch = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        launchCamera(options, (res) => {
          console.log('Response = ', res);
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.errorCode) {
            console.log('ImagePicker Error: ', res.errorCode);
          } else {
            setFilePath(res)
            setFileData(res.assets)
            setFileUri(res.assets[0].uri)
          }
        });
    }
   const imageGalleryLaunch = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        launchImageLibrary(options, (res) => {
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.errorCode) {
            console.log('ImagePicker Error: ', res.errorCode);
          } else {
            setFilePath(res)
            setFileData(res.assets)
            setFileUri(res.assets[0].uri)
          }
        });
      }
      const submitToFirebase = async() => {
        const usersCollection = await firestore().collection('Users').add({fileUri,textStatus})
        setTextStatus('')
        navigation.goBack()
        setFileUri('')
        console.log('Response is ',usersCollection)
      }
    return(
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={ICONS.BACKARROW} style={styles.back} resizeMode='contain'/>
                </TouchableOpacity>
                <Button title='Post' onPress={()=>submitToFirebase()}/>
            </View>
            <TextInput placeholder={filePth.length>0?"Say Something?":"What's on your mind?"} value={textStatus} onChangeText={(text)=>setTextStatus(text)} multiline={true} placeholderTextColor={THEME.COLORS.accentBlue} style={styles.input}/>
            {filePth.length>0?null
            :
            <Image source={{ uri: fileUri }} style={styles.imagePickerPath} resizeMode='contain'/>
            }
            <ImagePickerButton title='Add Video/Photo' onPress={()=>imageGalleryLaunch()} fontColor={styles.fontColor}/>
            <ImagePickerButton title='Open Camera' onPress={()=>cameraLaunch()} fontColor={styles.fontColor}/>
        </View>
    )
}
export default AddingPost