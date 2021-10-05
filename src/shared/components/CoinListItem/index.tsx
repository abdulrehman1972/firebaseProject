import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { RF } from "../../theme/responsive";
import FastImage from "react-native-fast-image";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import ToggleSwitch from "toggle-switch-react-native";
import { Coin } from "../../models/types";
import { setCoinIsActive } from "../../store/reducers/walletReducer";
import { useDispatch, useSelector } from "react-redux";
import { currenciesEnum } from "../../utils/AppConstants";
import { RootState } from "../../store";
import karaConfig from "../../../../kara.config";
import ConfidentialText from "../ConfidentialText";
import { getFixedAmount } from "../../services/helper.service";

interface Props extends TouchableOpacityProps {
  toggle?: boolean;
  item: Coin | undefined;
  onPress?: () => void;
}

const CoinListItem = (props: Props) => {
  const dispatch = useDispatch();

  const COIN_URL = `${karaConfig.API_URL}/admin/coin/${props.item?.coin_symbol}`;
  const onPressToggle = () =>
    dispatch(setCoinIsActive(props.item?.coin_symbol));

  const {
    wallet: { defaultCurrency },
    settings: { darkMode },
  } = useSelector((state: RootState) => state);

  const change = Number(props.item?.chart_data?.changePercentage24h) || 0.0;
  const rate = props.item?.chart_data?.rate
    ? Number(props.item?.chart_data?.rate)
    : 0;

  return (
    <TouchableOpacity
      activeOpacity={1}
      {...props}
      onPress={props.toggle ? onPressToggle : props.onPress}
    >
      <View style={[styles.container, secondaryBackgroundColorProperty()]}>
        <View style={styles.left}>
          <FastImage
            source={{ uri: props.item?.icon?.url }}
            resizeMode={FastImage.resizeMode.contain}
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.main}>
          <Text style={[styles.coinSymbol, fontColorPropery()]}>
            {props.item?.coin_name === "Smart Chain"
              ? "Smart Chain"
              : props.item?.coin_symbol.toUpperCase()}
          </Text>
          {props.item?.isMarketDataAvailable && (
            <Text style={styles.secondaryText}>
              {currenciesEnum[defaultCurrency]}
              {rate.toFixed(2)}{" "}
              <Text
                style={{
                  color:
                    change > 0
                      ? THEME.COLORS.changeGreen
                      : THEME.COLORS.changeRed,
                }}
              >
                {` ${change > 0 ? "+" : ""}${change.toFixed(2)}%`}
              </Text>
            </Text>
          )}
        </View>
        <View style={styles.right}>
          {props.toggle ? (
            <ToggleSwitch
              isOn={props.item?.is_active}
              onColor={THEME.COLORS.purple}
              offColor={THEME.COLORS.primaryBackground}
              size='medium'
              onToggle={onPressToggle}
            />
          ) : (
            <View>
              <ConfidentialText style={[styles.amountText, fontColorPropery()]}>
                {getFixedAmount(Number(props.item?.balance), 7) || "0.0000"}
              </ConfidentialText>
              {props.item?.isMarketDataAvailable && (
                <ConfidentialText
                  style={[
                    styles.secondaryText,
                    { textAlign: "right", fontSize: THEME.FONTS.SIZE.XSMALL },
                  ]}
                >
                  <>
                    {getFixedAmount(Number(props.item?.vs_currency_balance)) ||
                      "0.00"}{" "}
                    {defaultCurrency}
                  </>
                </ConfidentialText>
              )}
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinListItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(55),
    flexDirection: "row",
    padding: THEME.PADDING.LOW,
    paddingHorizontal: THEME.PADDING.NORMAL,
    marginBottom: THEME.MARGIN.LOW,
    borderRadius: THEME.RADIUS.BOX,
  },
  left: {
    width: "12%",
    height: "90%",
    alignSelf: "center",
    marginRight: THEME.MARGIN.LOW,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  coinSymbol: {
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontSize: THEME.FONTS.SIZE.SMALL,
  },
  secondaryText: {
    color: THEME.COLORS.textLight,
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    marginTop: THEME.MARGIN.VERYLOW,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  right: { height: "100%", justifyContent: "center" },
  amountText: {
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.textLight,
    textAlign: "right",
  },
});
