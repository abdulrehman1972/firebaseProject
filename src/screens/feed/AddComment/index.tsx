import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import fireStore from '@react-native-firebase/firestore';
const AddComment = () => {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getUser();
    const subscribe = fireStore()
      .collection('chainId')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            let data: any = change.doc.data();
            data.createdAt = data.createdAt.toDate();
            setMessages(prevMessages => GiftedChat.append(prevMessages, data));
          }
        });
      });
  }, []);
  const getUser = async () => {
    let localUser = await AsyncStorage.getItem('user');
    if (localUser) setUser(JSON.parse(localUser));
  };
  const onSend = (messages: IMessage[]) => {
    fireStore()
      .collection('chainId')
      .doc(Date.now().toString())
      .set(messages[0]);
  };
  if (Object.keys(user).length == 0) {
    return (
      <View style={styles.mainContainer}>
        <Text>This is where your chat will appear</Text>
      </View>
    );
  }
  return (
    <View style={styles.chatContainer}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{_id: user.id}}
      />
    </View>
  );
};
export default AddComment;
