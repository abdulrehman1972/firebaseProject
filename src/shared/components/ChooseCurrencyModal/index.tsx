import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { CoinCategory } from "../../models/types";
import {
  backgroundColorProperty,
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { HP, RF } from "../../theme/responsive";
import Icon from "react-native-vector-icons/Ionicons";
import { COIN_CATEGORIES } from "../../utils/AppConstants";
import GLOBAL_STYLE from "../../theme/global";
import FastImage from "react-native-fast-image";

interface Props {
  isVisible: boolean;
  onSelectCurrency: (coin: string) => void;
  onSelectCurrencyImage?: (image: string) => void;
  toggleModal: () => void;
}

const ChooseCurrencyModal = (props: Props) => {
  const { wallet } = useSelector((state: RootState) => state.wallet);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState(COIN_CATEGORIES);

  const RenderCurrency = ({ item }: { item: CoinCategory }) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.onSelectCurrency(item.value);
      }}
      style={[styles.textView, secondaryBackgroundColorProperty()]}
    >
      <FastImage
        source={item.image}
        style={styles.modalCoin}
        resizeMode='contain'
      />

      <Text style={[styles.contactName, fontColorPropery()]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      hasBackdrop={true}
      backdropOpacity={0.4}
      isVisible={props.isVisible}
      style={{ marginHorizontal: THEME.MARGIN.LOW }}
    >
      <View style={[styles.container, backgroundColorProperty()]}>
        <Pressable onPress={props.toggleModal} style={styles.close}>
          <Icon
            onPress={props.toggleModal}
            name='ios-close-circle-sharp'
            size={RF(30)}
            color={THEME.COLORS.yellow}
          />
        </Pressable>
        <Text style={[styles.heading, fontColorPropery()]}>
          Choose currency
        </Text>
        <FlatList
          data={currency}
          style={{ marginBottom: THEME.MARGIN.LOW }}
          keyExtractor={item => String(item.id)}
          renderItem={RenderCurrency}
          ListEmptyComponent={() => (
            <View style={styles.noContactView}>
              {loading ? (
                <ActivityIndicator color={THEME.COLORS.yellow} size='large' />
              ) : (
                <Text style={styles.noContactText}>No Currency</Text>
              )}
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

export default ChooseCurrencyModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: THEME.PADDING.NORMAL,
    paddingBottom: THEME.PADDING.HIGH,
    paddingHorizontal: THEME.PADDING.NORMAL,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: THEME.RADIUS.OVAL,
    borderTopRightRadius: THEME.RADIUS.OVAL,
  },
  heading: {
    fontSize: THEME.FONTS.SIZE.SMALL,
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    textAlign: "center",
    marginBottom: THEME.MARGIN.MID_LOW,
  },
  close: {
    position: "absolute",
    right: THEME.MARGIN.VERYLOW,
    top: -THEME.MARGIN.LOW,
    zIndex: 1000,
  },
  textView: {
    ...GLOBAL_STYLE.ROW,
    marginBottom: THEME.MARGIN.LOW,
    borderRadius: THEME.RADIUS.SMALLBOX,
    paddingVertical: THEME.PADDING.NORMAL,
    paddingHorizontal: THEME.PADDING.LOW,
  },
  contactName: {
    alignSelf: "center",
    marginLeft: THEME.MARGIN.LOW,
    fontSize: THEME.FONTS.SIZE.XSMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },

  modalCoin: {
    height: RF(30),
    width: RF(30),
  },
  noContactView: {
    width: "100%",
    height: HP(10),
    justifyContent: "center",
    alignItems: "center",
  },
  noContactText: { color: THEME.COLORS.textLight },
});
