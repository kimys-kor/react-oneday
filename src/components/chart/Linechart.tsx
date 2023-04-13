import * as React from "react";

import { ResponsiveLine, Serie } from "@nivo/line";

import { mockLineData } from "@data/chart/linechartData";

export type Props = {};

const LineChart = () => {
  return (
    <div
      style={{
        height: "95%",
        maxWidth: "100%",
        border: "1px solid #bbbbcf",
      }}
    >
      <ResponsiveLine
        data={mockLineData}
        margin={{ top: 40, right: 60, bottom: 60, left: 60 }}
        animate={false}
        enableSlices={"x"}
        yScale={{
          type: "linear",
          stacked: true,
          min: 0,
          max: 1000,
        }}
        lineWidth={3}
        curve="linear"
        colors={["#FF6622"]}
        enableGridX={false}
        pointSize={12}
        pointColor="white"
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        theme={{
          crosshair: {
            line: {
              strokeWidth: 2,
              stroke: "#FF6622",
              strokeOpacity: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
