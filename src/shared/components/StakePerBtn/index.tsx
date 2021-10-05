import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import { THEME } from "../../theme";
import { WP } from "../../theme/responsive";

interface Props {
  onpress?: () => void;
  textValue: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  touchStyle?: StyleProp<ViewStyle>;
}
const StakePerBtn = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.touchView, props.touchStyle]}
      onPress={props.onpress}
    >
      <View style={[styles.mainContainer, props.touchStyle, props.buttonStyle]}>
        <Text style={[styles.percentageText, props.textStyle]}>
          {props.textValue}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderRadius: THEME.RADIUS.SMALLBOX,
  },
  percentageText: {
    textAlign: "center",
  },
  touchView: {
    width: WP(29.5),
    marginRight: THEME.MARGIN.VERYLOW,
  },
});
export default StakePerBtn;
