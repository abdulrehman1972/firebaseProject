import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {THEME} from '../../theme';
import {RF} from '../../theme/responsive';

interface Props {
  list: any[];
  onPressFilter: (i: number) => void;
  containerStyle: StyleProp<ViewStyle>;
}

const PopupMenu = (props: Props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.list.map((item, index) => (
        <TouchableOpacity
          style={{
            backgroundColor: item.selected
              ? THEME.COLORS.purple
              : THEME.COLORS.secondaryBackground,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            padding: THEME.PADDING.LOW,
          }}
          key={index}
          onPress={() => props.onPressFilter(index)}>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PopupMenu;

const styles = StyleSheet.create({
  container: {
    width: RF(130),
    // height: RF(110),
    backgroundColor: THEME.COLORS.secondaryBackground,
    paddingVertical: RF(10),
    borderRadius: THEME.RADIUS.BOX,
    position: 'absolute',
    right: RF(20),
    zIndex: 100,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: THEME.COLORS.white,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    textAlign: 'left',
  },
});
