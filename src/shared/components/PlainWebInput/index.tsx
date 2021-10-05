import React from "react";
import {
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
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Icon from "react-native-vector-icons/Ionicons";

interface Props extends TextInputProps {
  inputStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  onPressSearch: (url: string) => void;
}

const PlainWebInput = (props: Props) => {
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
      <Icon
        onPress={props.onPressSearch}
        style={styles.icon}
        name='ios-search-outline'
        size={22}
        color={THEME.COLORS.textLight}
      />
    </View>
  );
};

export default PlainWebInput;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: THEME.RADIUS.BOX,
    alignSelf: "center",
    flexDirection: "row",
    height: HP(5),
    paddingHorizontal: RF(6),
    marginVertical: THEME.MARGIN.VERYLOW,
  },
  inputContainer: {
    flex: 1,
    alignSelf: "center",
    height: "100%",
    color: THEME.COLORS.white,
    paddingHorizontal: THEME.PADDING.LOW,
  },
  icon: {
    alignSelf: "center",
    color: THEME.COLORS.yellow,
  },
});
