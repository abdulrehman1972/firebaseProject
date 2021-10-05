import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {RF} from '../../theme/responsive';

interface Props extends FastImageProps {
  onPress: () => void;
  iconStyle?: StyleProp<ViewStyle>;
}

const IconButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.iconStyle]}
      onPress={props.onPress}
      activeOpacity={0.9}>
      <FastImage
        {...props}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    height: RF(30),
    width: RF(30),
  },
  icon: {
    height: '100%',
    width: '100%',
  },
});
