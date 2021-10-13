import {StyleSheet} from 'react-native';
import {THEME} from '../../../shared/theme';
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
  },
});
export default styles;
