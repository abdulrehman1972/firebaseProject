import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RF } from "../../theme/responsive";
import {
  Chart,
  Line,
  Area,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { THEME } from "../../theme";
import AnimatedTabGroup from "../AnimatedTabGroup";
import AppNoDataView from "../AppNoDataView";

interface Props {
  graphData?: any;
}

const CoinGraph = (props: Props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const data = useMemo(() => {
    if (selectedTabIndex === 0) {
      return props.graphData?.spark_line_1_day.map((i: any) => ({
        x: +i.timestamp,
        y: +i.price,
      }));
    }
    if (selectedTabIndex === 1) {
      return props.graphData?.spark_line_7_day.map((i: any) => ({
        x: +i.timestamp,
        y: +i.price,
      }));
    }
    if (selectedTabIndex === 2) {
      return props.graphData?.spark_line_30_day.map((i: any) => ({
        x: +i.timestamp,
        y: +i.price,
      }));
    }
    if (selectedTabIndex === 3) {
      return props.graphData?.spark_line_90_day.map((i: any) => ({
        x: +i.timestamp,
        y: +i.price,
      }));
    }
  }, [selectedTabIndex, props.graphData]);

  return (
    <View style={styles.container}>
      {props.graphData ? (
        <>
          <Chart
            style={styles.chartStyle}
            data={data ? data : []}
            padding={{ bottom: 10, top: 10 }}
          >
            <VerticalAxis
              theme={{
                grid: {
                  visible: false,
                },
                axis: { visible: false },
              }}
            />
            <Area
              theme={{
                gradient: {
                  from: { color: THEME.COLORS.yellow, opacity: 0.9 },
                  to: { color: THEME.COLORS.yellow, opacity: 0.01 },
                },
              }}
            />
            <Line
              theme={{
                stroke: { color: "#F89F36", width: 2, opacity: 0.4 },
              }}
            />
          </Chart>

          <AnimatedTabGroup
            activeTabBackground={THEME.COLORS.yellow}
            onPress={(val, index) => setSelectedTabIndex(index)}
            buttons={["1 Day", "7 Day", "1 Month", "3 Month"]}
            selectedIndex={selectedTabIndex}
          />
        </>
      ) : (
        <AppNoDataView
          boxStyle={{ height: RF(150) }}
          content='No Chart Data Available'
        />
      )}
    </View>
  );
};

export default CoinGraph;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(200),
  },
  chartStyle: {
    height: "90%",
    width: "100%",
    marginBottom: THEME.MARGIN.LOW,
  },
  noDataContainer: {
    width: "100%",
    height: RF(100),
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {},
});
