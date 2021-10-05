import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInputProps,
  View,
  TouchableOpacity,
} from "react-native";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { HP, RF, WP } from "../../theme/responsive";
import FastImage from "react-native-fast-image";
import { ICONS } from "../../../assets";
import { AppShowToast } from "../../services/helper.service";
import Clipboard from "@react-native-clipboard/clipboard";
import AppQRCodeScanner from "../AppQRCodeScanner";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
interface Props extends TextInputProps {
  inputStyle?: StyleProp<TextStyle>;
  onChangeAddress: (text: string) => void;
  toggleModal?: () => void;
  noContacts?: boolean;
}

const AddressInput = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  const onPressPaste = async () => {
    AppShowToast("Pasted");
    let text = await Clipboard.getString();
    props.onChangeAddress(text);
  };
  const [showScanner, setShowScanner] = useState(false);

  const scannerCallBack = (address: string) => {
    setShowScanner(false);
    props.onChangeAddress(address);
  };
  return (
    <View
      style={[
        styles.container,
        props.inputStyle,
        secondaryBackgroundColorProperty(),
      ]}
    >
      <AppQRCodeScanner isVisible={showScanner} callBack={scannerCallBack} />
      <TextInput
        {...props}
        placeholderTextColor={THEME.COLORS.textLight}
        style={[styles.inputContainer, fontColorPropery()]}
        selectionColor={darkMode ? THEME.COLORS.white : THEME.COLORS.black}
      />
      {/* <TouchableOpacity onPress={onPressPaste}>
        <FastImage
          source={ICONS.PASTE_BUTTON}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.paste}
        />
      </TouchableOpacity> */}
      {!props.noContacts && (
        <Icon
          onPress={props.toggleModal}
          name='contacts'
          style={{ alignSelf: "center", marginRight: THEME.MARGIN.LOW }}
          size={24}
          color={THEME.COLORS.yellow}
        />
      )}
      <Icon
        onPress={() => setShowScanner(true)}
        name='qrcode'
        style={{ alignSelf: "center" }}
        size={24}
        color={THEME.COLORS.yellow}
      />
    </View>
  );
};

export default AddressInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: HP(7),
    borderRadius: THEME.RADIUS.BOX,
    paddingHorizontal: RF(16),
    borderColor: THEME.COLORS.yellow,
    borderWidth: StyleSheet.hairlineWidth,
  },
  inputContainer: {
    flex: 1,
    alignSelf: "center",
    height: HP(6),
    color: THEME.COLORS.white,
    paddingHorizontal: THEME.PADDING.LOW,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  scan: { width: RF(20), height: "100%" },
  paste: {
    width: RF(52),
    height: "100%",
    marginRight: THEME.MARGIN.NORMAL,
  },
});
