import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import DAP_ICON from "../../../assets/icons/DAP_ICON";
import NEWS_ICON from "../../../assets/icons/NEWS_ICON";
import SETTING_ICON from "../../../assets/icons/SETTING_ICON";
import STAKING_ICON from "../../../assets/icons/STACKING_ICON";
import SWAP_ICON from "../../../assets/icons/SWAP_ICON";
import WALLET_ICON from "../../../assets/icons/WALLET_ICON";
import { RootState } from "../../store";
import { backgroundColorProperty, THEME } from "../../theme";
import styles from "./styles";

export default function CustomBottomTabBar({
  state,
  descriptors,
  navigation,
}: any) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const {
    settings: { darkMode },
  } = useSelector((state: RootState) => state);

  const darkModeStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: THEME.COLORS.primaryDarkBackground,
  };

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const RenderImage = ({
    index,
    isFocused,
    routeName,
  }: {
    index: number;
    isFocused: boolean;
    routeName: string;
  }) => {
    if (routeName == "DApps")
      return <DAP_ICON width={20} height={20} fill={iconColor(isFocused)} />;
    else if (routeName == "News")
      return <NEWS_ICON width={20} height={20} fill={iconColor(isFocused)} />;
    else if (routeName == "Wallet")
      return <WALLET_ICON width={20} height={20} fill={iconColor(isFocused)} />;
    else if (routeName == "Swap")
      return <SWAP_ICON width={20} height={20} fill={iconColor(isFocused)} />;
    else
      return (
        <SETTING_ICON width={20} height={20} fill={iconColor(isFocused)} />
      );
  };

  const labelColor = (isFocused: boolean) => {
    if (darkMode) {
      if (isFocused) {
        return THEME.COLORS.yellow;
      }
      return "gray";
    } else {
      if (isFocused) {
        return "white";
      } else {
        return "rgb(247, 208, 71)";
      }
    }
  };

  const iconColor = (isFocused: boolean) => {
    if (darkMode) {
      if (isFocused) {
        return THEME.COLORS.yellow;
      }
      return "gray";
    } else {
      if (isFocused) {
        return "white";
      } else {
        return "rgb(228, 180, 14)";
      }
    }
  };

  return (
    <View style={[styles.tabBar, backgroundColorProperty()]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View
              style={
                isFocused
                  ? darkMode
                    ? [styles.focusedContainer, darkModeStyle]
                    : styles.focusedContainer
                  : styles.container
              }
            >
              <RenderImage
                routeName={route.name}
                index={index}
                isFocused={isFocused}
              />
              <Text
                style={{
                  color: labelColor(isFocused),
                  fontFamily: THEME.FONTS.TYPE.REGULAR,
                  fontSize: THEME.FONTS.SIZE.XXSMALL,
                  marginTop: THEME.MARGIN.LOW,
                }}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
