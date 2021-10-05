import React from "react";
import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useSelector } from "react-redux";
import { ICONS } from "../../../assets";
import { TopAlertEntity } from "../../models/types";
import { RootState } from "../../store";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { RF } from "../../theme/responsive";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  alertData: TopAlertEntity | null;
  onDismiss: () => void;
}

const AppTopAlert = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <View style={[styles.container, secondaryBackgroundColorProperty()]}>
      <View style={styles.left}>
        <FastImage
          source={ICONS.MAINTENANCE}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.icon}
        />
      </View>
      <View style={styles.main}>
        <Text style={[styles.title, fontColorPropery()]}>
          {props.alertData?.title}
        </Text>
        <Text style={(styles.content, fontColorPropery())}>
          {props.alertData?.content}
        </Text>
      </View>
      <Pressable onPress={props.onDismiss} style={styles.right}>
        <Icon
          onPress={props.onDismiss}
          name='ios-close-circle-sharp'
          size={RF(25)}
          color={THEME.COLORS.yellow}
        />
      </Pressable>
    </View>
  );
};

export default AppTopAlert;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // top: RF(Platform.OS == "ios" ? 80 : 120),
    // zIndex: 1000,
    width: "100%",
    paddingVertical: THEME.PADDING.LOW,
    paddingHorizontal: THEME.PADDING.LOW,
    alignItems: "center",
    flexDirection: "row",
  },
  left: { marginRight: THEME.MARGIN.LOW },
  main: { flex: 1 },
  right: { marginLeft: THEME.MARGIN.LOW },
  icon: { width: RF(20), height: RF(20) },
  title: {
    fontSize: THEME.FONTS.SIZE.SMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  content: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
});
