import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Transaction } from "../../models/types";
import {
  backgroundColorProperty,
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import Icon from "react-native-vector-icons/EvilIcons";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { RF } from "../../theme/responsive";
import moment from "moment";
import PrimaryButton from "../PrimaryButton";

interface Props {
  isVisible: boolean;
  toggleModal: () => void;
  item: Transaction;
  openExplorer: () => void;
  kind: string;
}

const TransactionDetailModal = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  let transactionTime = new Date(props.item.createdAt);

  const statusColor = {
    color:
      props.item.status === "Completed" ? THEME.COLORS.green : THEME.COLORS.red,
  };
  return (
    <Modal
      hasBackdrop={false}
      isVisible={props.isVisible}
      style={[
        backgroundColorProperty(),
        { margin: 0, justifyContent: "flex-start" },
      ]}
    >
      <>
        <View style={[styles.container, { marginTop: RF(60) }]}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={props.toggleModal}
              style={[styles.close, { zIndex: 100 }]}
            >
              <Icon name='close' size={RF(24)} color={THEME.COLORS.textLight} />
            </TouchableOpacity>
            <Text style={[styles.headerTitle, fontColorPropery()]}>
              Transaction Detail
            </Text>
          </View>
          <View style={[styles.details, secondaryBackgroundColorProperty()]}>
            <View style={styles.detailRow}>
              <Text style={[styles.detailKey, fontColorPropery()]}>Date</Text>
              <Text style={[styles.detailValue, fontColorPropery()]}>
                {moment(transactionTime).format("MMMM DD, YYYY")}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={[styles.detailKey, fontColorPropery()]}>Type</Text>
              <Text style={[styles.detailValue, fontColorPropery()]}>
                {props.kind + " " + props.item.coinSymbol.toUpperCase()}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={[styles.detailKey, fontColorPropery()]}>
                Sending Address
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.detailValue, fontColorPropery()]}
              >
                {props.item.from}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={[styles.detailKey, fontColorPropery()]}>
                {props.kind} Amount
              </Text>
              <Text style={[styles.detailValue, fontColorPropery()]}>
                {props.item.amount + " " + props.item.coinSymbol.toUpperCase()}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={[styles.detailKey, fontColorPropery()]}>
                Recipient
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.detailValue, fontColorPropery()]}
              >
                {props.item.to}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={[styles.detailKeyBold, fontColorPropery()]}>
                Status
              </Text>
              <Text style={[styles.detailValueBold, statusColor]}>
                {props.item.status}
              </Text>
            </View>
          </View>

          {/* {props.item?.fee && (
            <View style={[styles.details, secondaryBackgroundColorProperty()]}>
              <View style={styles.detailRow}>
                <Text style={[styles.detailKey, fontColorPropery()]}>
                  Network Fee
                </Text>
                <Text style={[styles.detailValue, statusColor]}>
                  {props.item?.fee}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={[styles.detailKey, fontColorPropery()]}>
                  Max Total
                </Text>
                <Text style={[styles.detailValue, statusColor]}>
                  {props.item?.total}
                </Text>
              </View>
            </View>
          )} */}

          <PrimaryButton
            buttonStyle={{ marginTop: THEME.MARGIN.HIGH }}
            title='Details'
            onPress={props.openExplorer}
          />
        </View>
      </>
    </Modal>
  );
};

export default TransactionDetailModal;

const styles = StyleSheet.create({
  container: { paddingHorizontal: THEME.PADDING.NORMAL },
  header: { flexDirection: "row", alignItems: "center", zIndex: 1000 },
  headerTitle: {
    fontSize: THEME.FONTS.SIZE.SMALL,
    marginLeft: THEME.MARGIN.NORMAL,
  },
  close: {
    width: RF(40),
    height: RF(40),
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    marginTop: THEME.MARGIN.HIGH,
    paddingHorizontal: THEME.PADDING.NORMAL,
    paddingTop: THEME.PADDING.NORMAL,
    borderRadius: THEME.RADIUS.BOX,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: THEME.MARGIN.NORMAL,
  },
  detailKey: {
    flex: 1,
    textAlign: "left",
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    fontSize: THEME.FONTS.SIZE.XSMALL,
  },
  detailKeyBold: {
    flex: 1,
    textAlign: "left",
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontSize: THEME.FONTS.SIZE.XSMALL,
  },
  detailValue: {
    flex: 1,
    textAlign: "right",
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    fontSize: THEME.FONTS.SIZE.XSMALL,
  },
  detailValueBold: {
    flex: 1,
    textAlign: "right",
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontSize: THEME.FONTS.SIZE.XSMALL,
  },
});
