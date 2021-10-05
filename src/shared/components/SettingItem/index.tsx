import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import {
  backgroundColorProperty,
  fontColor,
  fontColorPropery,
  THEME,
} from "../../theme";
import { RF } from "../../theme/responsive";
import ToggleSwitch from "toggle-switch-react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import FastImage, { Source } from "react-native-fast-image";

interface Props extends TouchableOpacityProps {
  title?: string;
  showSwitch?: boolean;
  switchState?: boolean;
  toggleSwitch?: (value: boolean) => void;
  value?: string;
  chevron?: boolean;
  reset?: boolean;
  icon: number | Source;
}

const SettingItem = (props: Props) => {
  const {
    settings: { darkMode },
  } = useSelector((state: RootState) => state);

  const applyFontColor = () => {
    if (props.reset) {
      return {
        color: THEME.COLORS.yellow,
        fontFamily: THEME.FONTS.TYPE.BOLD,
      };
    } else {
      return fontColorPropery();
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        backgroundColorProperty(),
        {
          borderBottomColor: darkMode
            ? THEME.COLORS.secondaryLightBackground
            : THEME.COLORS.yellow,
        },
      ]}
    >
      <>
        <View style={styles.left}>
          <FastImage
            source={props.icon}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
          <Text
            style={[
              styles.title,
              applyFontColor(),
              { opacity: props?.disabled ? 0.5 : 1 },
            ]}
          >
            {props.title}
          </Text>
        </View>
        <View style={styles.right}>
          {props.chevron && (
            <Icon
              name='chevron-right'
              size={THEME.FONTS.SIZE.LARGE}
              color={darkMode ? THEME.COLORS.textLight : THEME.COLORS.black}
            />
          )}
          {props.showSwitch && (
            <ToggleSwitch
              isOn={props.switchState}
              onColor={THEME.COLORS.yellow}
              offColor={
                props?.disabled
                  ? THEME.COLORS.textExtraLight
                  : THEME.COLORS.textLight
              }
              size='medium'
              onToggle={props.toggleSwitch}
              disabled={props?.disabled ?? false}
            />
          )}
        </View>
      </>
    </TouchableOpacity>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(50),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: THEME.PADDING.NORMAL,
  },
  left: { flexDirection: "row", alignItems: "center" },
  icon: { width: RF(30), height: RF(30), marginRight: THEME.MARGIN.LOW },
  title: { fontSize: THEME.FONTS.SIZE.XXSMALL },
  right: { flexDirection: "row", alignItems: "center" },
  value: {
    color: THEME.COLORS.textLight,
    marginRight: THEME.MARGIN.LOW,
    fontSize: THEME.FONTS.SIZE.SMALL,
  },
});
