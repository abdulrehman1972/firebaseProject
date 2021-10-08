import {StyleSheet} from 'react-native';
import {THEME} from '../../../shared/theme';
import {RFValue} from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
  },
  touchView: {
    backgroundColor: THEME.COLORS.accentBlue,
    paddingVertical: THEME.PADDING.LOW,
    borderColor: THEME.COLORS.white,
    borderWidth: 1,
    width: RFValue(100),
  },
  tabText: {
    textAlign: 'center',
    color: THEME.COLORS.white,
  },
});
export default styles;
