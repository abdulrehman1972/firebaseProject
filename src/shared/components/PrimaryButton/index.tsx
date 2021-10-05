import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  View,
  TextStyle,
} from "react-native";
import { THEME } from "../../theme";
import GLOBAL_STYLE from "../../theme/global";
import { HP, RF } from "../../theme/responsive";
import Icon from "react-native-vector-icons/Entypo";

interface Props extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: string;
  loading?: boolean;
  small?: boolean;
}

const PrimaryButton = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        props.small ? styles.smallContainer : styles.container,
        props.buttonStyle,
      ]}
      disabled={props.loading}
      activeOpacity={0.7}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {props.icon && <Icon name={props.icon} style={styles.icon} />}
        {props.loading ? (
          <ActivityIndicator color={THEME.COLORS.white} />
        ) : (
          <Text style={[styles.buttonText, props.textStyle]}>
            {props.title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(55),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
    marginBottom: THEME.MARGIN.NORMAL,
    flexDirection: "row",
    backgroundColor: THEME.COLORS.yellow,
    shadowColor: THEME.COLORS.yellow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  smallContainer: {
    width: "60%",
    height: RF(40),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
    marginBottom: THEME.MARGIN.NORMAL,
    flexDirection: "row",
    backgroundColor: THEME.COLORS.yellow,
    shadowColor: THEME.COLORS.yellow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  icon: {
    fontSize: 20,
    color: THEME.COLORS.white,
    marginRight: THEME.MARGIN.LOW,
  },
  buttonText: {
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.white,
  },
});
