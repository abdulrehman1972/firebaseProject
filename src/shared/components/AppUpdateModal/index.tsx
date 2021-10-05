import React, { useState } from "react";
import {
  BackHandler,
  Linking,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { ICONS } from "../../../assets";
import { RootState } from "../../store";
import { backgroundColorProperty, fontColorPropery, THEME } from "../../theme";
import { HP, RF } from "../../theme/responsive";
import PrimaryButton from "../PrimaryButton";
import styles from "./styles";
import VersionCheck from "react-native-version-check";

interface Props {
  isVisible: boolean;
  toggleModal: () => void;
}

const AppUpdateModal = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  const onPressUpdate = async () => {
    try {
      let url = await VersionCheck.getStoreUrl();
      BackHandler.exitApp();
      Linking.openURL(url);
    } catch (error) {
      console.log(error);
      props.toggleModal();
    }
  };

  return (
    <Modal backdropOpacity={0.4} backdropColor='black' isVisible={true}>
      <View style={[styles.container, backgroundColorProperty()]}>
        {/* <Pressable onPress={props.toggleModal} style={styles.close}>
          <Icon
            onPress={props.toggleModal}
            name='ios-close-circle-sharp'
            size={RF(30)}
            color={THEME.COLORS.yellow}
          />
        </Pressable> */}
        <FastImage
          source={ICONS.ROCKET}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.rocket}
        />
        <Text style={[styles.mainText, fontColorPropery()]}>
          NEW VERSION RELEASED!
        </Text>
        <Text style={[styles.paraText, fontColorPropery()]}>
          Stay more secured and enjoy more speedy transactions by getting the
          latest update of CryptoKara.
        </Text>
        <PrimaryButton
          buttonStyle={{ marginBottom: 0, height: HP(6) }}
          title='Update'
          onPress={onPressUpdate}
        />
      </View>
    </Modal>
  );
};

export default AppUpdateModal;
