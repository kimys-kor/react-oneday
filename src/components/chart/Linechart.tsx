import * as React from "react";

import { ResponsiveLine, Serie } from "@nivo/line";

import { mockLineData } from "@/data/chartdata/linechartData";

export type Props = {};

const LineChart = () => {
  return (
    <div
      style={{
        height: "22rem",
        maxWidth: "100%",
        border: "1px solid #bbbbcf",
      }}
    >
      <ResponsiveLine
        data={mockLineData}
        margin={{ top: 40, right: 60, bottom: 60, left: 60 }}
        animate={false}
        enableSlices={"x"}
        gridYValues={5}
        xScale={{ type: "point" }}
        yScale={{
          nice: true,
          type: "linear",
          stacked: false,
          min: 0,
          max: "auto",
        }}
        axisLeft={{
          tickValues: 5,
        }}
        lineWidth={1.8}
        curve="linear"
        colors={["#FF6622"]}
        enableGridX={true}
        pointSize={7}
        pointColor="white"
        pointBorderWidth={1}
        pointBorderColor={{ from: "serieColor" }}
        theme={{
          crosshair: {
            line: {
              strokeWidth: 1,
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
