import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { RF } from "../../theme/responsive";
import FastImage from "react-native-fast-image";
import { fontColorPropery, THEME } from "../../theme";
import { DappEntity } from "../../models/types";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

interface Props extends TouchableOpacityProps {
  item: DappEntity | undefined;
  onPress?: () => void;
}

const DappItem = (props: Props) => {
  const {
    settings: { darkMode },
  } = useSelector((state: RootState) => state);
  return (
    <TouchableOpacity activeOpacity={0.8} {...props} onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.left}>
          <FastImage
            source={{ uri: props.item?.image.url }}
            resizeMode={FastImage.resizeMode.cover}
            style={{ flex: 1, borderRadius: THEME.RADIUS.BOX }}
          />
        </View>
        <View style={styles.main}>
          <Text style={[styles.title, fontColorPropery()]}>
            {props.item?.title}
          </Text>
          {props.item?.isFeatured && (
            <View style={styles.tagContainer}>
              <Text style={styles.tags}>Featured</Text>
            </View>
          )}
          <Text
            numberOfLines={2}
            style={[styles.description, fontColorPropery()]}
          >
            {props.item?.shortDescription}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DappItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: RF(100),
    flexDirection: "row",
    padding: THEME.PADDING.LOW,
    paddingHorizontal: THEME.PADDING.NORMAL,
    marginBottom: THEME.MARGIN.LOW,
    borderRadius: THEME.RADIUS.BOX,
  },
  left: {
    width: RF(80),
    height: RF(80),
    alignSelf: "center",
    marginRight: THEME.MARGIN.LOW,
    borderRadius: THEME.RADIUS.BOX,
  },
  main: {
    flex: 1,
    marginLeft: THEME.MARGIN.LOW,
    justifyContent: "space-between",
    borderBottomColor: THEME.COLORS.textLight,
    borderBottomWidth: 2,
    paddingBottom: THEME.PADDING.NORMAL,
  },
  title: {
    fontSize: THEME.FONTS.SIZE.MEDIUM,
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
  },
  description: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  tagContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: THEME.RADIUS.BOX,
    padding: THEME.PADDING.VERYLOW,
    paddingHorizontal: THEME.PADDING.LOW,
    backgroundColor: THEME.COLORS.yellow,
    position: "absolute",
    right: 5,
  },
  tags: { fontSize: THEME.FONTS.SIZE.XXXSMALL, color: "white" },
});
