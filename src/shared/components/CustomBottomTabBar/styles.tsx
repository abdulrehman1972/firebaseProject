import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: THEME.PADDING.VERYLOW,
    paddingHorizontal: THEME.PADDING.LOW,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  focusedContainer: {
    borderRadius: 16,
    backgroundColor: "#E4B40E",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 60,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
});

export default styles;
