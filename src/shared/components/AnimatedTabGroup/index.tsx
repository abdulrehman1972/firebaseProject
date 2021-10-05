import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableHighlight,
  Platform,
} from "react-native";
import { THEME } from "../../theme";

interface Props {
  selectedIndex: number;
  buttons: string[];
  onPress: (text: string, index: number) => void;
  activeTabBackground: string;
}

const AnimatedTabGroup: React.FC<Props> = ({
  selectedIndex,
  buttons,
  onPress,
  activeTabBackground,
}) => {
  const activeTabTranslateX = useState(new Animated.Value(0))[0];
  const activeTabWidth = useState(new Animated.Value(0))[0];
  const activeTabHeight = useState(new Animated.Value(0))[0];
  const [selectedTabIndex, setSelectedTabIndex] = useState(selectedIndex);
  const [data, setData] = useState<any>();

  useEffect(() => {
    setData(buttons.map(str => ({ title: str })));
  }, []);

  const handleTabSlide = (
    x: Animated.Value,
    height: Animated.Value,
    width: Animated.Value
  ) => {
    Animated.spring(activeTabTranslateX, {
      toValue: x,
      useNativeDriver: false,
    }).start();
    Animated.timing(activeTabHeight, {
      toValue: height,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.spring(activeTabWidth, {
      toValue: width,
      useNativeDriver: false,
    }).start();
  };

  const handleOnPress = (item: any, key: number) => {
    setSelectedTabIndex(key);
    handleTabSlide(item.x, item.tabHeight, item.tabWidth);
  };

  const onTabPress = (item: any, key: number) => {
    onPress(item.title, key);
    handleOnPress(item, key);
  };

  if (selectedIndex != selectedTabIndex) {
    onTabPress(data[selectedIndex], selectedIndex);
  }
  return (
    <View style={styles.container}>
      {data && (
        <Animated.View
          style={[
            styles.activatedTabContainer,
            {
              height: activeTabHeight,
              width: activeTabWidth,
              transform: [
                {
                  translateX: activeTabTranslateX,
                },
              ],
            },
          ]}
        >
          <View
            style={[
              styles.animatedTabGroupActivatedTab,
              styles.activeButtonStyle,
              { backgroundColor: activeTabBackground },
            ]}
          />
        </Animated.View>
      )}
      {data &&
        data.map((item: any, key: number) => {
          return (
            <TouchableHighlight
              key={key}
              underlayColor='transparent'
              onLayout={event => {
                item.x = event.nativeEvent.layout.x;
                item.tabHeight = event.nativeEvent.layout.height;
                item.tabWidth = event.nativeEvent.layout.width;
                if (key === selectedIndex || key === 0) {
                  handleTabSlide(item.x, item.tabHeight, item.tabWidth);
                }
              }}
              style={[styles.inActivatedTab, styles.inActiveButtonStyle]}
              onPress={() => onTabPress(item, key)}
            >
              <Text
                style={[
                  styles.inActivatedTabText,
                  {
                    color:
                      selectedTabIndex === key
                        ? "white"
                        : THEME.COLORS.textLight,
                  },
                ]}
              >
                {item.title}
              </Text>
            </TouchableHighlight>
          );
        })}
    </View>
  );
};

export default AnimatedTabGroup;

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginHorizontal: 2,
    flexDirection: "row",
    // backgroundColor: THEME.COLORS.secondaryBackground,
  },
  inActivatedTab: {
    flex: 1,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  inActiveButtonStyle: {
    backgroundColor: "transparent",
  },
  activeButtonStyle: {
    borderRadius: 16,
    margin: 2.5,
    backgroundColor: "grey",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.11,
        shadowRadius: 13,
        shadowColor: THEME.COLORS.chartColor,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  activatedTabText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  activatedTabContainer: {
    position: "absolute",
    top: 0,
  },
  animatedTabGroupActivatedTab: {
    flex: 1,
    // backgroundColor: "#bbb",
    justifyContent: "center",
    alignItems: "center",
  },
  inActivatedTabText: {
    color: "#bbb",
    textTransform: "capitalize",
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
  },
});
