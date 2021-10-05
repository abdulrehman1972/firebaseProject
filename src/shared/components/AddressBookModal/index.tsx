import React, { useEffect, useMemo, useState } from "react";
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
import { ContactEntity } from "../../models/types";
import {
  backgroundColorProperty,
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { HP, RF, WP } from "../../theme/responsive";
import { getAddressBook } from "../../services/contact.service";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  isVisible: boolean;
  onSelectContact: (contact: string) => void;
  toggleModal: () => void;
  blockchain: string;
}

const AddressBookModal = (props: Props) => {
  const { wallet } = useSelector((state: RootState) => state.wallet);
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  const address = useMemo(
    () => wallet.find(w => w.coin_symbol === "btc")?.address,
    []
  );
  const getContacts = async () => {
    try {
      setLoading(true);
      let res = await getAddressBook(address!);
      if (res.data) {
        setContacts(
          res.data?.filter(
            (c: ContactEntity) => c.blockchain === props.blockchain
          )
        );
      }

      setLoading(false);
    } catch (error) {
      console.log("Error getting contacts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const RenderContacts = ({ item }: { item: ContactEntity }) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.onSelectContact(item.address)}
      style={[styles.textView, secondaryBackgroundColorProperty()]}
    >
      <Text style={[styles.contactName, fontColorPropery()]}>
        {item.contactName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      hasBackdrop={true}
      backdropOpacity={0.4}
      isVisible={props.isVisible}
      style={{ margin: 0 }}
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
          Select a contact
        </Text>
        <FlatList
          style={{ marginBottom: THEME.MARGIN.LOW }}
          keyExtractor={item => item._id}
          data={contacts}
          renderItem={RenderContacts}
          ListEmptyComponent={() => (
            <View style={styles.noContactView}>
              {loading ? (
                <ActivityIndicator color={THEME.COLORS.yellow} size='large' />
              ) : (
                <Text style={styles.noContactText}>No contacts</Text>
              )}
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

export default AddressBookModal;

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
    flex: 1,
    paddingHorizontal: WP("3%"),
    // height: HP("10%"),
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: THEME.PADDING.LOW,
    backgroundColor: THEME.COLORS.textLight,
    marginTop: THEME.MARGIN.LOW,
  },
  contactName: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  noContactView: {
    width: "100%",
    height: HP(10),
    justifyContent: "center",
    alignItems: "center",
  },
  noContactText: { color: THEME.COLORS.textLight },
});
