import React from "react";
import {
  ActivityIndicator,
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { HP, RF, WP } from "../../theme/responsive";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
interface Props extends TextInputProps {
  inputStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  onPressSubmit?: () => void;
  onPressBack?: () => void;
  onPressForward?: () => void;
  onPressReload?: () => void;
  loading: boolean;
  canGoBack: boolean;
  canGoForward: boolean;
}

const WebInput = (props: Props) => {
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
      />
      <View style={styles.browserAction}>
        {props.loading ? (
          <ActivityIndicator
            size='small'
            color={THEME.COLORS.yellow}
            style={{ marginRight: THEME.MARGIN.LOW }}
          />
        ) : (
          <Icon
            onPress={props.onPressSubmit}
            style={styles.icon}
            name='ios-search-outline'
            size={22}
            color={THEME.COLORS.textLight}
          />
        )}
        <Icon
          onPress={props.onPressBack}
          style={styles.icon}
          name='arrow-back'
          size={24}
          color={
            props.canGoBack
              ? THEME.COLORS.textLight
              : THEME.COLORS.disabledTextLight
          }
        />
        <Icon
          onPress={props.onPressForward}
          style={styles.icon}
          name='arrow-forward'
          size={24}
          color={
            props.canGoBack
              ? THEME.COLORS.textLight
              : THEME.COLORS.disabledTextLight
          }
        />
        <Icon
          onPress={props.onPressReload}
          style={styles.icon}
          name='reload'
          size={20}
          color={THEME.COLORS.textLight}
        />
      </View>
    </View>
  );
};

export default WebInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    height: HP(5),
    paddingHorizontal: RF(16),
    marginVertical: THEME.MARGIN.VERYLOW,
  },
  inputContainer: {
    flex: 1,
    alignSelf: "center",
    height: "100%",
    color: THEME.COLORS.white,
    paddingHorizontal: THEME.PADDING.LOW,
  },
  browserAction: { flexDirection: "row" },
  icon: { alignSelf: "center", marginRight: THEME.MARGIN.LOW },
});
