import React from "react";
import {
  StyleSheet,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ViewStyle,
  UIManager,
  LayoutAnimation,
} from "react-native";
import { fontColor, fontColorPropery, THEME } from "../../theme";
import { RF, WP } from "../../theme/responsive";
import { useNavigation } from "@react-navigation/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";
import { ICONS } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setShowBalances } from "../../store/reducers/settingsReducer";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props {
  title?: string;
  showBack?: boolean;
  showAdd?: boolean;
  showDetails?: boolean;
  showEye?: boolean;
  showReload?: boolean;
  reloadAction?: () => void;
  detailAction?: () => void;
  backAction?: () => void;
  headerStyle?: StyleProp<ViewStyle>;
}

const AppHeader = (props: Props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const { darkMode, showBalances } = useSelector(
    (state: RootState) => state.settings
  );

  const onPressAdd = () => {
    console.log("Add pressed");
  };

  const toggleEye = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(setShowBalances(!showBalances));
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode
            ? THEME.COLORS.primaryDarkBackground
            : THEME.COLORS.primaryLightBackground,
        },
        { paddingTop: insets.top },
        props.headerStyle,
      ]}
    >
      <View style={styles.left}>
        {props.showBack ? (
          <TouchableOpacity
            activeOpacity={1}
            onPress={props.backAction ? props.backAction : navigation.goBack}
            style={styles.backView}
          >
            <FastImage
              source={ICONS.BACK_ICON}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
              tintColor={fontColor()}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Text style={[styles.header, fontColorPropery()]}>
          {props.title || ""}
        </Text>
      </View>
      <View style={styles.right}>
        {props.showReload ? (
          <TouchableOpacity
            activeOpacity={1}
            onPress={props.reloadAction}
            style={styles.rightButton}
          >
            <FastImage
              source={ICONS.HEADER_RELOAD}
              resizeMode={FastImage.resizeMode.contain}
              style={{ width: RF(32), height: RF(32) }}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {props.showEye ? (
          <TouchableOpacity
            activeOpacity={1}
            onPress={toggleEye}
            style={styles.rightButton}
          >
            <FastImage
              source={showBalances ? ICONS.EYE_OFF : ICONS.EYE}
              resizeMode={FastImage.resizeMode.contain}
              style={{ width: RF(32), height: RF(32) }}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {props.showAdd ? (
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPressAdd}
            style={styles.rightButton}
          >
            <FastImage
              source={ICONS.HEADER_PLUS}
              resizeMode={FastImage.resizeMode.contain}
              style={{ width: RF(32), height: RF(32) }}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {props.showDetails ? (
          <TouchableOpacity
            activeOpacity={1}
            onPress={props.detailAction}
            style={styles.rightButton}
          >
            <FastImage
              source={ICONS.HEADER_CHART}
              resizeMode={FastImage.resizeMode.contain}
              style={{ width: RF(32), height: RF(32) }}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(Platform.OS == "ios" ? 40 : 60),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RF(10),
  },
  left: {
    flexDirection: "row",
    // height: '100%',
    alignItems: "center",
  },
  backView: {
    height: "100%",
    width: "20%",
  },
  rightButton: {
    // justifyContent: "center",
    alignItems: "center",
    marginRight: THEME.MARGIN.LOW,
  },
  icon: {
    width: RF(22),
    height: RF(22),
  },
  header: {
    textAlignVertical: "center",
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontSize: THEME.FONTS.SIZE.SMALL,
    marginLeft: THEME.MARGIN.NORMAL,
  },
  right: {
    flexDirection: "row",
  },
});
