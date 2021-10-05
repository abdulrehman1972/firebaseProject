import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../theme";
import { RF, WP } from "../../theme/responsive";

interface Props {
  featured?: boolean;
}

const NewsItemEmpty = (props: Props) => {
  return (
    <View style={props.featured ? styles.featuredContainer : styles.container}>
      <Text style={styles.text}>{`No ${
        props.featured ? "featured" : "latest"
      } news available`}</Text>
    </View>
  );
};

export default NewsItemEmpty;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    height: RF(178),
    marginBottom: THEME.MARGIN.MID_LOW,
  },
  featuredContainer: {
    width: WP(75),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: THEME.MARGIN.NORMAL,
    height: RF(178),
    marginRight: THEME.MARGIN.VERYLOW,
  },
  text: {
    color: THEME.COLORS.textLight,
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
  },
});
