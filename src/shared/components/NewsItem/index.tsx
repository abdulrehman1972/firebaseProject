import moment from "moment";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage, { FastImageProps } from "react-native-fast-image";
import { NewsEntity } from "../../models/types";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { RF, WP } from "../../theme/responsive";

interface Props {
  onPress?: () => void;
  item: NewsEntity;
  featured?: boolean;
}

const NewsItem = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
      style={[
        props.featured ? styles.featuredContainer : styles.container,
        // secondaryBackgroundColorProperty(),
      ]}
    >
      <FastImage
        source={{ uri: props.item?.featuredImage.url }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />
      <Text style={[styles.title, fontColorPropery()]}>
        {props.item?.title}
      </Text>
      <View style={styles.bottomView}>
        <View
          style={[styles.dateContainer, secondaryBackgroundColorProperty()]}
        >
          <Text style={[styles.date, fontColorPropery()]}>
            {moment(props.item?.createdAt).format("MMM DD, YYYY")}
          </Text>
        </View>
        <View style={styles.tagContainer}>
          <Text style={styles.tags}>{props.item?.tags}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
    // padding: THEME.PADDING.LOW,
    // borderRadius: THEME.RADIUS.BOX,
  },
  featuredContainer: {
    width: WP(75),
    overflow: "hidden",
    justifyContent: "center",
    marginLeft: THEME.MARGIN.NORMAL,
    marginRight: THEME.MARGIN.VERYLOW,
    // padding: THEME.PADDING.LOW,
    // borderRadius: THEME.RADIUS.BOX,
  },
  image: {
    width: "100%",
    height: RF(120),
    borderRadius: THEME.RADIUS.BOX,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.yellow,
  },
  title: {
    marginTop: THEME.MARGIN.NORMAL,
    marginBottom: THEME.MARGIN.LOW,
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    textAlign: "left",
  },
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
    // maxWidth: RF(70),
    borderRadius: THEME.RADIUS.BOX,
    padding: THEME.PADDING.VERYLOW,
    paddingHorizontal: THEME.PADDING.LOW,
  },
  tagContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: THEME.RADIUS.BOX,
    padding: THEME.PADDING.VERYLOW,
    paddingHorizontal: THEME.PADDING.LOW,
    backgroundColor: THEME.COLORS.yellow,
  },
  date: { fontSize: THEME.FONTS.SIZE.XXXXSMALL },
  tags: { fontSize: THEME.FONTS.SIZE.XXXSMALL, color: "white" },
  bottomView: { flexDirection: "row", justifyContent: "space-between" },
  divider: {
    marginVertical: THEME.MARGIN.MID_LOW,
  },
});
