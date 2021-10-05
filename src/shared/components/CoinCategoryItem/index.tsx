import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { useSelector } from "react-redux";
import { CoinCategory } from "../../models/types";
import { RootState } from "../../store";
import { HP, WP } from "../../theme/responsive";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme/index";

const CoinCategoryItem = ({
  item,
  onPress,
  selectedCategory,
  news,
}: {
  item: CoinCategory;
  onPress: () => void;
  selectedCategory: string;
  news?: boolean;
}) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  const borderColor = () => ({
    borderColor:
      selectedCategory === item.blockchain ||
      selectedCategory.toLowerCase() === item.label.toLowerCase()
        ? THEME.COLORS.yellow
        : "transparent",
  });

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={[
          styles.CoinView,
          secondaryBackgroundColorProperty(),
          borderColor(),
        ]}
      >
        <FastImage
          source={item.image}
          resizeMode='contain'
          style={styles.coinImage}
        />
        <Text style={[styles.coinName, fontColorPropery()]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  coinImage: {
    height: HP(5),
    width: HP(5),
  },
  CoinView: {
    paddingVertical: THEME.PADDING.LOW,
    paddingHorizontal: THEME.PADDING.NORMAL,
    borderRadius: THEME.RADIUS.BOX,
    justifyContent: "center",
    alignItems: "center",
    marginRight: THEME.MARGIN.LOW,
    borderWidth: 2,
  },
  coinName: {
    marginTop: THEME.MARGIN.LOW,
    fontSize: THEME.FONTS.SIZE.XSMALL,
  },
});
export default CoinCategoryItem;
