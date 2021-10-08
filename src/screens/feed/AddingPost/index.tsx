import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import ImagePickerButton from '../../../shared/components/ImagePickerButton';
import {GenericNavigation} from '../../../shared/Modals/types';
import {RootState} from '../../../shared/store';
import {THEME} from '../../../shared/theme';
import styles from './styles';

interface props extends GenericNavigation {}
const AddingPost = (props: props) => {
  const email = useSelector((state: RootState) => state.message.email);
  const username = useSelector((state: RootState) => state.message.username);
  const isDarkMode = useSelector(
    (state: RootState) => state.message.isDarkMode,
  );
  const [filePth, setFilePath] = useState('');
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');
  const [textStatus, setTextStatus] = useState('');
  const [isVisible, setVisible] = useState(false);
  const navigation = useNavigation();
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode) {
        console.log('ImagePicker Error: ', res.errorCode);
      } else {
        setFilePath(res);
        setFileData(res.assets);
        setFileUri(res.assets[0].uri);
      }
    });
  };
  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode) {
        console.log('ImagePicker Error: ', res.errorCode);
      } else {
        setFilePath(res);
        setFileData(res.assets);
        setFileUri(res.assets[0].uri);
      }
    });
  };
  const submitToFirebase = async () => {
    setVisible(true);
    const reference = storage().ref(fileUri);
    const task = await reference
      .putFile(fileUri)
      .then(() => console.log('The task is completed'));
    const url = await storage().ref(fileUri).getDownloadURL();
    const usersCollection = await firestore()
      .collection('Users')
      .add({url, textStatus, email, username})
      .then(response => {
        setTextStatus('');
        setFileUri('');
        setVisible(false);
        console.log('The response from ', response);
        navigation.goBack();
      });
  };
  return (
    <View style={isDarkMode ? styles.mainContainerDark : styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={30}
            color={isDarkMode ? THEME.COLORS.white : THEME.COLORS.black}
          />
        </TouchableOpacity>
        <Button title="Post" onPress={() => submitToFirebase()} />
      </View>
      <TextInput
        placeholder={
          filePth.length > 0 ? 'Say Something?' : "What's on your mind?"
        }
        value={textStatus}
        onChangeText={text => setTextStatus(text)}
        multiline={true}
        placeholderTextColor={
          isDarkMode ? THEME.COLORS.red : THEME.COLORS.accentBlue
        }
        style={isDarkMode ? styles.inputDark : styles.input}
      />
      {filePth.length > 0 ? null : (
        <Image
          source={{uri: fileUri}}
          style={styles.imagePickerPath}
          resizeMode="contain"
        />
      )}
      {isVisible && (
        <ActivityIndicator
          size="large"
          color={THEME.COLORS.accentBlue}
          style={styles.indicatorStyle}
        />
      )}
      <ImagePickerButton
        title="Add Video/Photo"
        onPress={() => imageGalleryLaunch()}
        fontColor={isDarkMode ? styles.fontColorDark : styles.fontColor}
      />
      <ImagePickerButton
        title="Open Camera"
        onPress={() => cameraLaunch()}
        fontColor={isDarkMode ? styles.fontColorDark : styles.fontColor}
      />
    </View>
  );
};
export default AddingPost;
