import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
  Platform,
  Text,
} from "react-native";
import { BarCodeReadEvent } from "react-native-camera";
import Modal from "react-native-modal";
import QRCodeScanner from "react-native-qrcode-scanner";
import { THEME } from "../../theme";
import { RF, WP } from "../../theme/responsive";
import AppHeader from "../AppHeader";

interface Props {
  isVisible: boolean;
  callBack: (text: string) => void;
  title?: string;
}

const AppQRCodeScanner = (props: Props) => {
  const window = useWindowDimensions();

  function onSuccess(e: BarCodeReadEvent) {
    if (e) {
      let address = e?.data;
      props.callBack(address.replace("ethereum:", "") || "");
    }
  }
  return (
    <Modal
      style={{ margin: 0 }}
      backdropOpacity={0.85}
      isVisible={props.isVisible}
    >
      <SafeAreaView style={styles.container}>
        <AppHeader
          showBack
          title={props.title ? props.title : "Scan QR Code"}
          backAction={() => props.callBack("")}
          headerStyle={{ height: RF(Platform.OS === "ios" ? 60 : 80) }}
        />
        <QRCodeScanner
          onRead={onSuccess}
          cameraStyle={{
            height: window.height,
            width: window.width,
            alignSelf: "center",
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default AppQRCodeScanner;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
