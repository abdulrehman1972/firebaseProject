import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage, { FastImageProps } from "react-native-fast-image";
import { THEME } from "../../theme";
import { RF } from "../../theme/responsive";

interface Props extends FastImageProps {
  title: string;
  onPress?: () => void;
}

const AppCoinButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <FastImage
        {...props}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
      />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default AppCoinButton;

const styles = StyleSheet.create({
  container: {
    // borderRadius: THEME.RADIUS.BOX,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: THEME.MARGIN.NORMAL,
  },
  image: { width: RF(50), height: RF(50) },
  title: { marginTop: THEME.MARGIN.LOW, color: THEME.COLORS.yellow },
});
