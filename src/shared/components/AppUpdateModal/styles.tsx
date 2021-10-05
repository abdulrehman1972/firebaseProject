import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
import GLOBAL_STYLE from "../../theme/global";
import { RF, WP } from "../../theme/responsive";

const styles = StyleSheet.create({
  container: {
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: THEME.PADDING.NORMAL,
    paddingVertical: THEME.PADDING.HIGH,
  },
  close: {
    position: "absolute",
    right: THEME.MARGIN.MID_LOW,
    top: THEME.MARGIN.MID_LOW,
    zIndex: 1000,
  },
  rocket: {
    height: RF(100),
    width: RF(50),
  },
  mainText: {
    fontSize: THEME.FONTS.SIZE.SMALL,
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    color: THEME.COLORS.biometryCircleButtonColor,
    width: WP(85),
    textAlign: "center",
    marginVertical: THEME.MARGIN.MID_LOW,
  },
  paraText: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    color: THEME.COLORS.biometryCircleButtonColor,
    lineHeight: RF(18),
    textAlign: "center",
    width: WP(65),
    marginBottom: THEME.MARGIN.VERYHIGH,
  },
});

export default styles;
