import React, { useState } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { RootState } from "../../../shared/store";
import GLOBAL_STYLE from "../../../shared/theme/global";
import { THEME } from "../../../shared/theme";
import SwapMain from "../../../screens/Swap/SwapMain";
import SwapResult from "../../../screens/Swap/SwapResult";
import StakingList from "../../../screens/Staking/StakingList";
import StakeNow from "../../../screens/Staking/StakeNow";
import StakingConfirmation from "../../../screens/Staking/StakingConfirmation";
import LiquidityMain from "../../../screens/Liquidity/LiquidityMain";
import AddLiquidity from "../../../screens/Liquidity/AddLiquidity";

const Stack = createStackNavigator();

const SwapStackMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SwapMain'
        component={SwapMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SwapResult'
        component={SwapResult}
        options={{ title: "", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const StakingStackMain = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name='StakingList' component={StakingList} />
      <Stack.Screen name='StakeNow' component={StakeNow} />
      <Stack.Screen
        name='StakingConfirmation'
        component={StakingConfirmation}
      />
    </Stack.Navigator>
  );
};

const LiquidityStackMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LiquidityMain'
        component={LiquidityMain}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name='AddLiquidity'
        component={AddLiquidity}
        options={{ title: "", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const SwapStack = () => {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleIndexChange = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <View
        style={{
          margin: THEME.MARGIN.LOW,
          height: "9%",
          ...GLOBAL_STYLE.CENTER,
        }}
      >
        <SegmentedControlTab
          values={["Swap", "Staking", "Liquidity"]}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
          tabStyle={{
            backgroundColor: darkMode
              ? THEME.COLORS.secondaryDarkBackground
              : THEME.COLORS.white,
            height: "100%",
            borderColor: THEME.COLORS.yellow,
          }}
          tabTextStyle={{
            color: THEME.COLORS.yellow,
            fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
          }}
          borderRadius={THEME.RADIUS.SMALLBOX}
          activeTabStyle={{ backgroundColor: THEME.COLORS.yellow }}
          activeTabTextStyle={{
            color: THEME.COLORS.white,
            fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
          }}
        />
      </View>
      {selectedIndex == 1 ? (
        <StakingStackMain />
      ) : selectedIndex == 2 ? (
        <LiquidityStackMain />
      ) : (
        <SwapStackMain />
      )}
    </>
  );
};

export default SwapStack;

// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import SwapMain from "../../../screens/Swap/SwapMain";

// const Stack = createStackNavigator();

// const SwapStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={({ navigation }) => ({
//         headerShown: false,
//       })}
//     >
//       <Stack.Screen name='SwapMain' component={SwapMain} />
//     </Stack.Navigator>
//   );
// };

// export default SwapStack;
