import React, { useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RF } from "../../theme/responsive";
import FastImage from "react-native-fast-image";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { ICONS } from "../../../assets";
import GLOBAL_STYLE from "../../theme/global";
import { Transaction } from "../../models/types";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  BSCSCAN,
  ETHERSCAN,
  RINKEBY_EXPLORER,
  TESTNET_BSC,
} from "../../utils/AppConstants";
import TransactionDetailModal from "../TransactionDetailModal";

interface Props {
  kind: "sent" | "received";
  item: Transaction;
  coinSymbol: string;
}

const TransactionItem = (props: Props) => {
  const { darkMode, testnet } = useSelector(
    (state: RootState) => state.settings
  );
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const TRANSACTION_ICON = () => {
    if (props.kind === "sent" && darkMode) {
      return ICONS.SENT_DARK;
    } else if (props.kind === "sent" && !darkMode) {
      return ICONS.SENT_LIGHT;
    }
    if (props.kind === "received" && darkMode) {
      return ICONS.RECEIVED_DARK;
    } else {
      return ICONS.RECEIVED_LIGHT;
    }
  };
  const TRANSACTION_TEXT = props.kind === "sent" ? "Sent" : "Received";

  let transactionTime = new Date(props.item.createdAt);

  const explorerUrl = () => {
    if (props.item.explorer === "bscscan") {
      return `${!testnet ? BSCSCAN : TESTNET_BSC}${props.item.txId}`;
    } else if (props.item.explorer === "etherscan") {
      return `${!testnet ? ETHERSCAN : RINKEBY_EXPLORER}${props.item.txId}`;
    } else {
      return props.item.explorerUrl;
    }
  };

  const openExplorer = async () => {
    try {
      const supported = await Linking.canOpenURL(explorerUrl());
      if (supported) {
        await Linking.openURL(explorerUrl());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onPressTransaction = () => {
    toggleModal();
  };
  return (
    <>
      <TransactionDetailModal
        isVisible={showModal}
        item={props.item}
        openExplorer={openExplorer}
        toggleModal={toggleModal}
        kind={TRANSACTION_TEXT}
      />
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onPressTransaction}
        style={[styles.container, secondaryBackgroundColorProperty()]}
      >
        <View style={styles.left}>
          <FastImage
            source={TRANSACTION_ICON()}
            resizeMode={FastImage.resizeMode.contain}
            style={{ width: "80%", height: "100%" }}
          />
        </View>
        <View style={styles.main}>
          <Text style={[styles.price, fontColorPropery()]}>
            {props.item.amount} {props.coinSymbol.toUpperCase()}
          </Text>
          <Text style={styles.smallText}>
            {moment(transactionTime).format("MMM DD, YYYY, h:mm:ss a")}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={[styles.statusText, fontColorPropery()]}>
            {TRANSACTION_TEXT}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(55),
    borderRadius: THEME.RADIUS.BOX,
    flexDirection: "row",
    paddingHorizontal: THEME.PADDING.LOW,
    paddingVertical: THEME.PADDING.LOW,
    marginBottom: THEME.MARGIN.LOW,
  },
  left: { width: "16%", height: "100%", ...GLOBAL_STYLE.CENTER },
  main: {
    flex: 1,
    justifyContent: "space-around",
    marginLeft: THEME.MARGIN.LOW,
  },
  price: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.white,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    textTransform: "uppercase",
  },
  smallText: {
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
    color: THEME.COLORS.textLight,
  },
  statusText: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.textLight,
  },
  right: { height: "100%", justifyContent: "space-around" },
});
