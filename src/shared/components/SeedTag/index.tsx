import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { RF } from "../../theme/responsive";

interface Props {
  number: string | number;
  value: string;
}

const SeedTag = (props: Props) => {
  return (
    <View style={[styles.container, secondaryBackgroundColorProperty()]}>
      <View style={styles.numberView}>
        <Text style={styles.number}>{props.number}</Text>
      </View>
      <Text style={[styles.value, fontColorPropery()]}>{props.value}</Text>
    </View>
  );
};

export default SeedTag;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: THEME.FONTS.SIZE.LARGE,
    paddingHorizontal: THEME.PADDING.LOW,
    paddingVertical: THEME.PADDING.VERYLOW,
    marginRight: THEME.MARGIN.NORMAL,
    marginTop: THEME.MARGIN.LOW,
    minWidth: "25%",
  },
  numberView: {
    backgroundColor: THEME.COLORS.yellow,
    height: THEME.FONTS.SIZE.LARGE,
    width: THEME.FONTS.SIZE.LARGE,
    borderRadius: THEME.FONTS.SIZE.LARGE / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  number: { color: THEME.COLORS.white },
  value: { marginLeft: THEME.MARGIN.LOW },
});
