import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {THEME} from '../../../shared/theme';
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: THEME.PADDING.NORMAL,
    paddingHorizontal: THEME.PADDING.LOW,
  },
  titleText: {
    fontSize: THEME.FONTS.SIZE.LARGE,
    color: THEME.COLORS.accentBlue,
    marginLeft: THEME.MARGIN.NORMAL,
    marginTop: THEME.MARGIN.NOVAHIGH,
  },
  descriptionText: {
    fontSize: THEME.FONTS.SIZE.MEDIUM,
    color: THEME.COLORS.accentBlue,
    marginLeft: THEME.MARGIN.NORMAL,
    marginBottom: THEME.MARGIN.LOW,
  },
  forgetText: {
    color: THEME.COLORS.accentBlue,
    textAlign: 'right',
    marginRight: THEME.MARGIN.NORMAL,
  },
  buttonContainer: {
    paddingHorizontal: THEME.PADDING.SUPERHIGH,
  },
  indicator: {
    position: 'absolute',
    marginLeft: RFValue(165),
    marginTop: RFValue(270),
    flex: 1,
  },
});
export default styles;
