import firestore from '@react-native-firebase/firestore';
import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Menu, MenuDivider, MenuItem} from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {ICONS} from '../../../assets';
import AddFeedButton from '../../../shared/components/AddFeedButton';
import FeedCard from '../../../shared/components/FeedCard';
import {GenericNavigation} from '../../../shared/Modals/types';
import {RootState} from '../../../shared/store';
import {THEME} from '../../../shared/theme';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {resetState} from '../../../shared/store/Reducer/WalletReducer/WalletReducer';

interface props extends GenericNavigation {}
var data = [];

const FeedMain = (props: props) => {
  const email = useSelector((state: RootState) => state.message.email);
  const isDarkMode = useSelector(
    (state: RootState) => state.message.isDarkMode,
  );
  const [visible, setVisible] = useState(false);
  const [responseArray, setResponseArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fromFirebase();
  }, []);

  const fromFirebase = async () => {
    await firestore()
      .collection('Users')
      .onSnapshot(d => {
        data = d._docs;
        console.log(data);
        setResponseArray(data);
        return;
      });

    //
  };

  const navigation = useNavigation();
  return (
    <ScrollView style={isDarkMode ? styles.scrollDark : styles.scroll}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={isDarkMode ? styles.roundImage1Dark : styles.roundImage1}>
          <Image
            source={ICONS.USER_PROFILE}
            style={isDarkMode ? styles.roundImageDark : styles.roundImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <AddFeedButton onPress={() => navigation.navigate('AddFeed')} />

        <View>
          <Menu
            visible={visible}
            anchor={
              <TouchableOpacity
                style={styles.menu}
                onPress={() => setVisible(true)}>
                <Icon
                  name="menu"
                  size={30}
                  color={
                    isDarkMode ? THEME.COLORS.red : THEME.COLORS.accentBlue
                  }
                />
              </TouchableOpacity>
            }
            onRequestClose={() => setVisible(false)}>
            <MenuItem
              onPress={() => {
                props?.navigation.navigate('SettingMain');
                setVisible(false);
              }}>
              Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onPress={() => {
                props?.navigation.dispatch(StackActions.popToTop());
                dispatch(resetState());
              }}>
              Log Out
            </MenuItem>
          </Menu>
        </View>
      </View>
      <View style={styles.secondary}>
        {data &&
          data.length > 0 &&
          data.map((item, i) => (
            <FeedCard
              key={i}
              uri={item['_data'].url}
              postContent={item['_data'].textStatus}
              onPressComment={() => props?.navigation?.navigate('AddComment')}
            />
          ))}
      </View>
      <View style={styles.emptyView}></View>
    </ScrollView>
  );
};
export default FeedMain;
