import styled from "styled-components";
import Barchart from "@components/chart/Barchart";

import Piechart from "@components/chart/Piechart";
import Linechart from "@components/chart//Linechart";

import Summary from "@components/common/Summary";
import CustomSelect from "@/styles/selectbox/CustomSelect";

import { corpOptions, summaryList } from "@data/dashboard/dashboardData";
import { pointOccupationData, color } from "@/data/chart/piechartData";

function Dashboard() {
  return (
    <Dashboardbox>
      <Headerbox>
        <Summary
          title="접수 중인 주문"
          subTitle1="승인 대기중"
          subTitle2="13건"
        />
        <Summary
          title="배달 중인 주문"
          subTitle1="승인 대기중"
          subTitle2="13건"
        />
        <Summary
          title="배달완료 주문"
          subTitle1="승인 대기중"
          subTitle2="13건"
        />
        <Summary
          title="불편 접수 주문"
          subTitle1="승인 대기중"
          subTitle2="13건"
        />
      </Headerbox>

      <Chartbox1>
        <IndicatorTitlebox>
          <IndicatorTitle>
            최근 일주일 주문량<Greyfont>단위:건</Greyfont>
          </IndicatorTitle>
          <Detailbutton>자세히 &gt;</Detailbutton>
        </IndicatorTitlebox>
        <Linechart></Linechart>
      </Chartbox1>

      <Chartbox2>
        <Barcard>
          <IndicatorTitlebox>
            <IndicatorTitle>
              최근 5일 주문금액 <Greyfont>단위:원</Greyfont>
            </IndicatorTitle>
            <Detailbutton>자세히 &gt;</Detailbutton>
          </IndicatorTitlebox>
          <Barchart></Barchart>
        </Barcard>

        <Piecard>
          <IndicatorTitlebox>
            <IndicatorTitle>
              최근 일주일 불편 신고<Greyfont>단위:건</Greyfont>
            </IndicatorTitle>
            <Detailbutton>자세히 &gt;</Detailbutton>
          </IndicatorTitlebox>
          <Piechart Data={pointOccupationData} color={color}></Piechart>
        </Piecard>
      </Chartbox2>

      <Chartbox1>
        <IndicatorTitlebox>
          <IndicatorTitle>
            최근 일주일 신규 회원 현황<Greyfont>단위:1명</Greyfont>
          </IndicatorTitle>
          <Detailbutton>자세히 &gt;</Detailbutton>
        </IndicatorTitlebox>
        <Linechart></Linechart>
      </Chartbox1>
    </Dashboardbox>
  );
}

export default Dashboard;

const Dashboardbox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  gap: 0.75rem;
`;

const Headerbox = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 2.5rem;
  gap: 1.5rem;

  justify-content: space-between;
  background-color: #fff;

  box-sizing: border-box;

  @media (max-width: 1150px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  }
`;

const Selectbox = styled.div`
  max-width: 30rem;
  height: 3.3125rem;
`;

const Summarybox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

const Chartbox1 = styled.div`
  box-sizing: border-box;
  padding: 2.5rem;
  width: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Chartbox2 = styled.div`
  box-sizing: border-box;
  padding: 2.5rem;
  width: 100%;
  background-color: #fff;

  display: flex;
  gap: 2%;
  justify-content: space-between;
`;

const Barcard = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Piecard = styled.div`
  width: 38%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const IndicatorTitlebox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IndicatorTitle = styled.div`
  font-weight: 700;
  font-size: 17px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Greyfont = styled.p`
  margin-left: 10px;
  color: #7b829b;
  font-size: 14px;
  font-weight: 400;
  display: inline;
`;

const Detailbutton = styled.button`
  width: 5.125rem;
  height: 1.9375rem;
  background-color: #ff6622;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;

  font-weight: 500;
  font-size: 0.85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
