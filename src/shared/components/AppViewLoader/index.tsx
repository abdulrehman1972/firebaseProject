import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { THEME } from "../../theme";
import { RF } from "../../theme/responsive";

interface Props {
  boxStyle?: StyleProp<ViewStyle>;
}

const AppViewLoader = (props: Props) => {
  return (
    <View style={[styles.container, props.boxStyle]}>
      <ActivityIndicator color={THEME.COLORS.yellow} size='large' />
    </View>
  );
};

export default AppViewLoader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(100),
    justifyContent: "center",
    alignItems: "center",
  },
});
