import Modal from 'react-native-modal';
import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ICONS} from '../../../assets';
import {THEME} from '../../theme';
import {RF} from '../../theme/responsive';
import GLOBAL_STYLE from '../../theme/global';
import AppHeader from '../AppHeader';
import PrimaryButton from '../PrimaryButton';
import AppInput from '../AppInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';
import {AppShowToast} from '../../services/helper.service';

interface Props {
  isVisible: boolean;
  callback: (value: boolean) => void;
}

const PinModal = (props: Props) => {
  const [pin, setPin] = useState('');

  const {
    password_protection: {password},
  } = useSelector((state: RootState) => state.wallet);

  const checkPin = () => {
    if (!pin) {
      return AppShowToast('Please enter your password');
    } else if (pin.length < 6) {
      return AppShowToast('Password cannot be less than six digits');
    }
    if (pin !== password) {
      return AppShowToast('Incorrect password entered');
    }
    if (pin === password) {
      props.callback(true);
    }
  };

  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropOpacity={1}
      isVisible={props.isVisible}
      backdropColor={THEME.COLORS.primaryBackground}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.crossContainer}
          onPress={() => props.callback(false)}>
          <FastImage
            tintColor={THEME.COLORS.white}
            source={ICONS.CROSS}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.cross}
          />
        </TouchableOpacity>
        <FastImage
          source={ICONS.SECURITY_PIN}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.coinIcon}
        />
        <Text style={styles.mainText}>Please enter your password</Text>
        <AppInput
          secureTextEntry={true}
          inputStyle={{marginVertical: THEME.MARGIN.NORMAL}}
          value={pin}
          onChangeText={setPin}
          placeholder={'Enter Pin...'}
        />
        <PrimaryButton title="Confirm" onPress={checkPin} />
      </View>
    </Modal>
  );
};

export default PinModal;

const styles = StyleSheet.create({
  container: {flex: 1, ...GLOBAL_STYLE.CENTER},
  coinIcon: {
    height: RF(100),
    width: RF(100),
    alignSelf: 'center',
    marginBottom: THEME.MARGIN.NORMAL,
  },
  crossContainer: {
    width: RF(25),
    height: RF(25),
    position: 'absolute',
    top: RF(Platform.OS === 'ios' ? 40 : 0),
    right: RF(10),
  },
  cross: {
    width: '100%',
    height: '100%',
  },
  mainText: {
    fontSize: THEME.FONTS.SIZE.MEDIUM,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    color: THEME.COLORS.textLight,
    marginBottom: THEME.MARGIN.SUPERHIGH,
  },
});
