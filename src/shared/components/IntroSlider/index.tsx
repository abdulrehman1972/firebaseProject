import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IntroSlide } from "../../models/types";
import { backgroundColorProperty, fontColorPropery, THEME } from "../../theme";
import FastImage from "react-native-fast-image";
import { RF } from "../../theme/responsive";

interface Props {
  item: IntroSlide;
}

const IntroSlider = (props: Props) => {
  return (
    <View
      key={props.item.key}
      style={[styles.container, backgroundColorProperty()]}
    >
      <FastImage
        source={props.item.image}
        style={styles.slideImage}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={[styles.slideTitle, fontColorPropery()]}>
        {props.item.title}
      </Text>
      <Text style={[styles.slideSubTitle, fontColorPropery()]}>
        {props.item.text}
      </Text>
    </View>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: THEME.PADDING.HIGH,
    justifyContent: "center",
    alignItems: "center",
  },
  slideTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    textAlign: "center",
    marginTop: THEME.MARGIN.HIGH,
    marginBottom: THEME.MARGIN.NORMAL,
  },
  slideImage: { width: RF(220), height: RF(220), alignSelf: "center" },
  slideSubTitle: {
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
    // lineHeight: THEME.FONTS.SIZE.XLARGE,
  },
});
