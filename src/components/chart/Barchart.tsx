import * as React from "react";
import { ResponsiveBar } from "@nivo/bar";

const Barchart = () => {
  const handle = {
    barClick: (data: any) => {
      console.log(data);
    },

    legendClick: (data: any) => {
      console.log(data);
    },
  };

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div
      style={{
        height: "22rem",
        maxWidth: "100%",
        border: "1px solid #bbbbcf",
      }}
    >
      <ResponsiveBar
        /**
         * chart에 사용될 데이터
         */
        data={[
          { bottle: "캐시문상", cola: 1200 },
          { bottle: "핏츠", cidar: 2000 },
          { bottle: "언어의정원", fanta: 3100 },
          { bottle: "로또서치", milkis: 3100 },
          { bottle: "모이리", sunup: 3200 },
        ]}
        /**
         * chart에 보여질 데이터 key (측정되는 값)
         */
        keys={["cola", "cidar", "fanta", "milkis", "sunup"]}
        /**
         * keys들을 그룹화하는 index key (분류하는 값)
         */
        indexBy="bottle"
        /**
         * chart margin
         */
        margin={{ top: 50, right: 50, bottom: 30, left: 50 }}
        /**
         * chart padding (bar간 간격, 막대의 넓이)
         */
        padding={0.5}
        /**
         * chart 색상
         */
        colors={["#FF6622", "#FFDC22", "#06E9A5", "#22AFFF", "#6922FF"]} // 커스터하여 사용할 때
        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
        /**
         * color 적용 방식
         */
        colorBy="id" // 색상을 keys 요소들에 각각 적용
        // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
        enableLabel={false}
        theme={{
          axis: {
            /**
             * axis ticks style (bottom, left에 있는 값)
             */
            ticks: {
              text: {
                fontSize: 14,
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
        /**
         * label 안보이게 할 기준 width
         */
        labelSkipWidth={36}
        /**
         * label 안보이게 할 기준 height
         */
        labelSkipHeight={12}
        /**
         * bar 클릭 이벤트
         */
        onClick={handle.barClick}
        /**
         * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
         */
        legends={[]}
      />
    </div>
  );
};

export default Barchart;
