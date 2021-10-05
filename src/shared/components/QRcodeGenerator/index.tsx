import * as React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { THEME } from "../../theme";
import { RF, WP } from "../../theme/responsive";

type Props = {
  value: string;
};

export const QRcodeGenerator = (props: Props) => {
  return (
    <View style={styles.container}>
      <QRCode size={WP(35) - RF(16)} value={props?.value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.white,
    padding: THEME.PADDING.LOW,
    justifyContent: "center",
    alignItems: "center",
    width: WP(35),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    marginVertical: THEME.MARGIN.HIGH,
  },
});
