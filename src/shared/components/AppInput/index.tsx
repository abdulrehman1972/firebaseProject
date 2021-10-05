import React from "react";
import {
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInputProps,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { HP, RF, WP } from "../../theme/responsive";
import Icon from "react-native-vector-icons/MaterialIcons";
import NewIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import FastImage from "react-native-fast-image";
import { ICONS } from "../../../assets";

interface Props extends TextInputProps {
  inputStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  icon?: string;
  onPressIcon?: () => void;
  eye?: string;
  showMax?: boolean;
  onPressMax?: () => void;
}

const AppInput = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  return (
    <View
      style={[
        styles.container,
        props.inputStyle,
        secondaryBackgroundColorProperty(),
      ]}
    >
      <TextInput
        {...props}
        placeholderTextColor={THEME.COLORS.textLight}
        style={[
          styles.inputContainer,
          props.textInputStyle,
          fontColorPropery(),
        ]}
        selectionColor={darkMode ? THEME.COLORS.white : THEME.COLORS.black}
      />
      {props.icon ? (
        <Icon
          style={{ alignSelf: "center" }}
          name={props.icon}
          size={24}
          color={THEME.COLORS.textLight}
        />
      ) : (
        <NewIcon
          onPress={props.onPressIcon}
          style={{ alignSelf: "center" }}
          name={props.eye}
          size={24}
          color={THEME.COLORS.textLight}
        />
      )}
      {props.showMax ? (
        <TouchableOpacity onPress={props.onPressMax} style={styles.maxButton}>
          <FastImage
            source={ICONS.MAX_BUTTON}
            resizeMode={FastImage.resizeMode.contain}
            style={{ flex: 1, borderRadius: THEME.RADIUS.SMALLBOX }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    height: HP(7),
    borderColor: THEME.COLORS.yellow,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: THEME.RADIUS.BOX,
    paddingHorizontal: RF(16),
    marginVertical: THEME.MARGIN.LOW,
  },
  inputContainer: {
    flex: 1,
    alignSelf: "center",
    height: "100%",
    color: THEME.COLORS.white,
    paddingHorizontal: THEME.PADDING.LOW,
  },
  maxButton: {
    width: RF(52),
    height: "100%",
    borderRadius: THEME.RADIUS.SMALLBOX,
    overflow: "hidden",
  },
});
