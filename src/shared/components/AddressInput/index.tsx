import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {THEME} from '../../theme/index';
import Icon from 'react-native-vector-icons/Feather';

interface props extends TextInputProps {
  isPassword?: boolean;
  isVisible?: boolean;
  onPress?: () => void;
}
const AddressInput = (props: props) => {
  return (
    <View style={styles.mainView}>
      <TextInput
        {...props}
        autoCapitalize="none"
        placeholderTextColor={THEME.COLORS.accentBlue}
        style={styles.input}
      />
      {props.isPassword ? (
        props.isVisible ? (
          <TouchableOpacity onPress={props.onPress}>
            <Icon name="eye-off" size={20} color={THEME.COLORS.accentBlue} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={props.onPress}>
            <Icon name="eye" size={20} color={THEME.COLORS.accentBlue} />
          </TouchableOpacity>
        )
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    borderColor: THEME.COLORS.accentBlue,
    borderWidth: 1,
    width: RFValue(300),
    marginLeft: THEME.MARGIN.NORMAL,
    paddingVertical: THEME.PADDING.NORMAL,
    paddingLeft: THEME.PADDING.LOW,
    borderRadius: THEME.RADIUS.BOX,
    marginBottom: THEME.MARGIN.NORMAL,
    flexDirection: 'row',
  },
  input: {width: RFValue(260)},
});
export default AddressInput;
