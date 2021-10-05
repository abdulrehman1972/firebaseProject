import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { fontColorPropery, THEME } from "../../theme";
import { RF } from "../../theme/responsive";

interface Props {
  content: string;
  boxStyle?: StyleProp<ViewStyle>;
}

const AppNoDataView = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <View style={[styles.container, props.boxStyle]}>
      <Text style={styles.text}>{props.content}</Text>
    </View>
  );
};

export default AppNoDataView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(100),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.textLight,
  },
});
