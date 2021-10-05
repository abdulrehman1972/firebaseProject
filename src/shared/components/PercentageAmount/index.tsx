import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  fontColorPropery,
  secondaryBackgroundColorProperty,
  THEME,
} from "../../theme";
import { HP, RF, WP } from "../../theme/responsive";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Props {
  percentageCallback: (number: number) => void;
}

const buttonValue = [
  { label: "25%", value: 25 },
  { label: "50%", value: 50 },
  { label: "75%", value: 75 },
  { label: "100%", value: 100 },
];

const PercentageAmount = (props: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  const [selectedPercentage, setSelectedPercentage] = useState(0);

  const onPressButton = (value: number) => {
    setSelectedPercentage(value);
    props.percentageCallback(value);
  };

  const RenderButton = ({ item }: any) => (
    <TouchableOpacity
      style={[
        secondaryBackgroundColorProperty(),
        item.value === selectedPercentage
          ? styles.selectedButton
          : styles.button,
      ]}
      onPress={() => onPressButton(item.value)}
    >
      <Text
        style={
          item.value === selectedPercentage
            ? styles.selectedButtonText
            : styles.buttonText
        }
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={[styles.container]}>
      {buttonValue.map(b => (
        <RenderButton key={b.value} item={b} />
      ))}
    </View>
  );
};

export default PercentageAmount;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: THEME.MARGIN.LOW,
  },
  button: {
    flex: 1,
    padding: THEME.PADDING.LOW,
    alignItems: "center",
    marginRight: "1.2%",
    borderRadius: THEME.RADIUS.SMALLBOX,
  },
  buttonText: {
    color: THEME.COLORS.textLight,
    fontSize: THEME.FONTS.SIZE.XXSMALL,
  },
  selectedButton: {
    backgroundColor: THEME.COLORS.yellow,
    flex: 1,
    padding: THEME.PADDING.LOW,
    alignItems: "center",
    marginRight: "1.2%",
    borderRadius: THEME.RADIUS.SMALLBOX,
  },
  selectedButtonText: {
    color: THEME.COLORS.white,
    fontSize: THEME.FONTS.SIZE.XXSMALL,
  },
  maxButton: { width: RF(52), height: "100%" },
});
