import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontColorPropery, THEME } from "../../theme";
import { HP, RF, WP } from "../../theme/responsive";
import PrimaryButton from "../PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import FastImage, { Source } from "react-native-fast-image";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Props {
  coinName?: string;
  minimumAmountValue?: string;
  annualInterestValue?: string;
  source: number | Source;
  onPress?: () => void;
}

const StakingCard = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  const navigation = useNavigation();
  return (
    <>
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor: darkMode
              ? THEME.COLORS.secondaryDarkBackground
              : THEME.COLORS.white,
          },
        ]}
      >
        <View style={styles.primaryContainer}>
          <FastImage
            source={props.source}
            style={styles.coinImage}
            resizeMode='contain'
          />
          <Text style={[styles.coinName, fontColorPropery()]}>
            {props.coinName?.toUpperCase()}
          </Text>
        </View>
        <View style={styles.secondaryContainer}>
          <Text style={[styles.interestText, fontColorPropery()]}>
            Annualized interest Rate
          </Text>

          <Text style={[styles.minimumAmountText, fontColorPropery()]}>
            Minimum Locked Amount
          </Text>
        </View>
        <View style={styles.interestContainer}>
          <Text style={styles.interestValue}>{props.annualInterestValue}%</Text>
          <View style={styles.coinValueView}>
            <Text style={[styles.coinValue, fontColorPropery()]}>
              {props.minimumAmountValue}
            </Text>
            <Text style={[styles.coinNameSecondary, fontColorPropery()]}>
              {props.coinName?.toUpperCase()}
            </Text>
          </View>
        </View>
        <PrimaryButton
          title='Stake Now'
          buttonStyle={styles.buttonStyle}
          onPress={() =>
            navigation.navigate("StakeNow", { coinName: props.coinName })
          }
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: THEME.COLORS.primaryDarkBackground,
    width: WP(90),
    marginLeft: THEME.MARGIN.NORMAL,
    paddingVertical: THEME.PADDING.LOW,
    borderRadius: THEME.RADIUS.BOX,
    marginTop: THEME.MARGIN.NORMAL,
    elevation: RF(7),
  },
  coinImage: {
    height: HP(7),
    width: WP(14),
    marginLeft: THEME.MARGIN.LOW,
  },
  primaryContainer: {
    flexDirection: "row",
  },
  coinName: {
    alignSelf: "center",
    marginLeft: THEME.MARGIN.LOW,
    fontSize: THEME.FONTS.SIZE.MEDIUM,
    fontWeight: "700",
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  secondaryContainer: {
    marginTop: THEME.MARGIN.LOW,
    paddingHorizontal: THEME.PADDING.NORMAL,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  interestText: {
    color: THEME.COLORS.text,
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  minimumAmountText: {
    color: THEME.COLORS.text,
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
    marginLeft: THEME.MARGIN.SUPERHIGH,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  interestContainer: {
    marginTop: THEME.MARGIN.NORMAL,
    paddingHorizontal: THEME.PADDING.NORMAL,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  interestValue: {
    color: THEME.COLORS.changeGreen,
    fontSize: THEME.FONTS.SIZE.SMALL,
  },
  coinValueView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  coinValue: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  coinNameSecondary: {
    alignSelf: "center",
    marginLeft: THEME.MARGIN.LOW,
  },
  buttonStyle: {
    width: WP(84),
    marginTop: THEME.MARGIN.HIGH,
    marginBottom: THEME.MARGIN.VERYLOW,
  },
});
export default StakingCard;
