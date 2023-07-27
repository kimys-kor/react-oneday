// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { horizontalData } from "@/data/chartdata/HorizontalchartData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const HorizontalBarchart = () => {
  return (
    <div
      style={{
        height: "30rem",
        maxWidth: "100%",
        border: "1px solid #bbbbcf",
      }}
    >
      <ResponsiveBar
        colors={["#FF6622", "#FFDC22", "#06E9A5", "#22AFFF", "#6922FF"]}
        data={horizontalData}
        keys={["amount"]}
        indexBy="apps"
        margin={{ top: 10, right: 50, bottom: 30, left: 70 }}
        padding={0.5}
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in apps: " + e.indexValue;
        }}
        theme={{
          labels: {
            text: {
              fontSize: 14,
              fill: "#fff",
            },
          },
          axis: {
            /**
             * axis ticks style (bottom, left에 있는 값)
             */
            ticks: {
              text: {
                fontSize: 12,
                fill: "#7B829B",
              },
            },
          },
        }}
        /**
         * axis bottom 설정
         */
        axisBottom={{
          tickSize: 0, // 값 설명하기 위해 튀어나오는 점 크기
          legendPosition: "middle", // 글씨 위치
          legendOffset: 50, // 글씨와 chart간 간격
        }}
        /**
         * axis left 설정
         */
        axisLeft={{
          tickSize: 0, // 값 설명하기 위해 튀어나오는 점 크기
          tickPadding: 5, // tick padding
          tickRotation: 0, // tick 기울기
          legendPosition: "middle", // 글씨 위치
          legendOffset: -60, // 글씨와 chart간 간격
        }}
      />
    </div>
  );
};

export default HorizontalBarchart;
