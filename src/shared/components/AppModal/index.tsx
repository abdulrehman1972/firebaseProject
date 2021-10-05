import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { backgroundColorProperty, fontColorPropery, THEME } from "../../theme";
import { HP, RF } from "../../theme/responsive";
import PrimaryButton from "../PrimaryButton";
import styles from "./styles";
import { title } from "process";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  isVisible: boolean;
  title: string;
  description: string;
  icon?: number | Source;
  toggleModal: () => void;
}

const AppModal = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <Modal
      animationIn='slideInUp'
      animationOut='slideOutDown'
      backdropOpacity={0.4}
      backdropColor='black'
      isVisible={true}
    >
      <View style={[styles.container, backgroundColorProperty()]}>
        <Pressable onPress={props.toggleModal} style={styles.close}>
          <Icon
            onPress={props.toggleModal}
            name='ios-close-circle-sharp'
            size={RF(30)}
            color={THEME.COLORS.yellow}
          />
        </Pressable>
        <FastImage
          source={props.icon!}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.rocket}
        />
        <Text style={[styles.mainText, fontColorPropery()]}>{props.title}</Text>
        <Text style={[styles.paraText, fontColorPropery()]}>
          {props.description}
        </Text>
        {/* <PrimaryButton small title='Update' onPress={onPressUpdate} /> */}
      </View>
    </Modal>
  );
};

export default AppModal;
