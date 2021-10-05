import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { THEME } from "../../theme";
import { HP, RF, WP } from "../../theme/responsive";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import GLOBAL_STYLE from "../../theme/global";
import { ICONS } from "../../../assets";
import Entypo from "react-native-vector-icons/Entypo";

interface Props extends TextProps {
  value: number;
  title: string;
  coin: string;
  icon?: string;
  textStyle?: StyleProp<TextStyle>;
  toggleModal?: () => void;
}

const SwapCard = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  const RenderCard = ({ item }: any) => (
    <View
      style={[
        styles.subContainer,
        {
          backgroundColor: darkMode
            ? THEME.COLORS.secondaryDarkBackground
            : THEME.COLORS.white,
        },
      ]}
    >
      <View style={styles.subCard1}>
        <Text
          style={[
            styles.subText,
            props.textStyle,
            {
              color: darkMode
                ? THEME.COLORS.white
                : THEME.COLORS.biometryCircleButtonColor,
              marginBottom: THEME.MARGIN.VERYLOW,
            },
          ]}
        >
          {props.title}
        </Text>
        <Text
          style={[
            styles.mainText,
            {
              color: darkMode
                ? THEME.COLORS.white
                : THEME.COLORS.biometryCircleButtonColor,
            },
          ]}
        >
          {props.value}
        </Text>
        <Text
          style={[
            styles.subText,
            {
              color: darkMode
                ? THEME.COLORS.white
                : THEME.COLORS.biometryCircleButtonColor,
              marginTop: THEME.MARGIN.VERYLOW,
            },
          ]}
        >
          Balance: {props.value}
        </Text>
      </View>

      <View style={styles.subCard2}>
        {/* <TouchableOpacity style={styles.coinContainer}> */}
        <Image
          source={ICONS.ETHEREUM}
          style={styles.coin}
          resizeMode='contain'
        />
        {/* </TouchableOpacity> */}
        <Text
          style={[
            styles.coinText,
            {
              color: darkMode
                ? THEME.COLORS.white
                : THEME.COLORS.biometryCircleButtonColor,
            },
          ]}
        >
          {props.coin}
        </Text>
        <TouchableOpacity
          onPress={props.toggleModal}
          style={styles.backContainer}
        >
          <Entypo
            name={"chevron-down"}
            size={RF(17)}
            color={
              darkMode
                ? THEME.COLORS.white
                : THEME.COLORS.biometryCircleButtonColor
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <>
      <RenderCard />
    </>
  );
};

export default SwapCard;

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    ...GLOBAL_STYLE.ROW,
    width: "95%",
    height: "100%",
    alignSelf: "center",

    borderRadius: THEME.RADIUS.BOX,
    marginVertical: THEME.MARGIN.LOW,
  },
  subCard1: {
    flex: 0.5,
    justifyContent: "center",
    padding: THEME.PADDING.LOW,
  },
  subCard2: {
    flex: 0.5,
    ...GLOBAL_STYLE.ROW,
    ...GLOBAL_STYLE.CENTER,
  },

  coin: {
    height: "30%",
    width: "18%",
  },
  coinText: {
    marginHorizontal: THEME.MARGIN.LOW,
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
  },

  backContainer: {
    width: "10%",
    height: "13%",
  },
  back: {
    height: "100%",
    width: "100%",
  },
  mainText: {
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    fontSize: THEME.FONTS.SIZE.MEDIUM,
    color: THEME.COLORS.biometryCircleButtonColor,
  },
  subText: {
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
});
