// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { horizontalData } from "@data/chart/HorizontalchartData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const HorizontalBarchart = () => {
  return (
    <div
      style={{
        height: "600px",
        maxWidth: "100%",
        border: "1px solid #bbbbcf",
      }}
    >
      <ResponsiveBar
        colors={["#FF6622"]}
        data={horizontalData}
        keys={["amount"]}
        indexBy="apps"
        margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
        padding={0.3}
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
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in apps: " + e.indexValue;
        }}
      />
    </div>
  );
};

export default HorizontalBarchart;
