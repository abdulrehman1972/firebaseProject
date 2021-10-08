import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {THEME} from '../../theme';

interface props {
  onPress: () => void;
}
const AddFeedButton = (props: props) => {
  const isDarkMode = useSelector(
    (state: RootState) => state.message.isDarkMode,
  );
  return (
    <TouchableOpacity
      style={isDarkMode ? styles.touchViewDark : styles.touchView}
      onPress={props.onPress}>
      <View>
        <Text style={isDarkMode ? styles.darkText : null}>
          What's on your mind?
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  touchView: {
    width: RFValue(180),
    borderWidth: 0.5,
    height: RFValue(30),
    borderColor: THEME.COLORS.accentBlue,
    justifyContent: 'center',
    marginLeft: THEME.MARGIN.LOW,
    marginTop: THEME.MARGIN.LOW,
    borderRadius: THEME.RADIUS.OVAL,
    paddingLeft: THEME.PADDING.VERYLOW,
  },
  touchViewDark: {
    width: RFValue(180),
    borderWidth: 0.5,
    height: RFValue(30),
    borderColor: THEME.COLORS.red,
    justifyContent: 'center',
    marginLeft: THEME.MARGIN.LOW,
    marginTop: THEME.MARGIN.LOW,
    borderRadius: THEME.RADIUS.OVAL,
    paddingLeft: THEME.PADDING.VERYLOW,
  },
  darkText: {
    color: THEME.COLORS.white,
  },
});
export default AddFeedButton;
