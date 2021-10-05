import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { THEME } from "../../theme";
import GLOBAL_STYLE from "../../theme/global";
import { HP, RF } from "../../theme/responsive";

interface Props extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  small?: boolean;
}

const SecondaryButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[
        props.small ? styles.smallContainer : styles.container,
        props.buttonStyle,
      ]}
      {...props}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {
    width: THEME.SIZE.BUTTONWIDTH,
    height: RF(55),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
    borderWidth: 2,
    borderColor: THEME.COLORS.yellow,
    marginBottom: THEME.MARGIN.NORMAL,
  },
  smallContainer: {
    width: "60%",
    height: RF(40),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
    borderWidth: 2,
    borderColor: THEME.COLORS.yellow,
    marginBottom: THEME.MARGIN.NORMAL,
  },
  buttonText: {
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontSize: THEME.FONTS.SIZE.SMALL,
    textAlign: "center",
    color: THEME.COLORS.yellow,
  },
});
