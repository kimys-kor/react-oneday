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
        <Summarybox>
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
        </Summarybox>
      </Headerbox>

      <Chartbox1>
        <Indicatorcard>
          <IndicatorTitlebox>
            <IndicatorTitle>
              최근 일주일 주문량<Greyfont>단위:건</Greyfont>
            </IndicatorTitle>
            <Detailbutton>자세히 &gt;</Detailbutton>
          </IndicatorTitlebox>
          <Linechart></Linechart>
        </Indicatorcard>
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

      <Chartbox3>
        <Indicatorcard>
          <IndicatorTitlebox>
            <IndicatorTitle>
              최근 일주일 신규 회원 현황<Greyfont>단위:1명</Greyfont>
            </IndicatorTitle>
            <Detailbutton>자세히 &gt;</Detailbutton>
          </IndicatorTitlebox>
          <Linechart></Linechart>
        </Indicatorcard>
      </Chartbox3>
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
`;

const Headerbox = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  background-color: #fff;

  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Summarybox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  padding-left: 2rem;
  padding-right: 2rem;
`;

const Chartbox1 = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 38.6875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Chartbox2 = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 38.6875rem;

  display: flex;
  gap: 2rem;
  justify-content: center;
  background-color: #fff;
`;

const Chartbox3 = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 39.6875rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  background-color: #fff;
`;

const Titlebox = styled.div`
  width: 80%;
  height: 100%;
  border-bottom: 1px solid #bbbbcf;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SummaryDetail = styled.div`
  font-size: 13px;
  display: inline;
  color: #898ea1;
`;

const IndicatorTitlebox = styled.div`
  margin-top: 50px;
  margin-bottom: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Indicatorcard = styled.div`
  margin-top: 5px;
  width: 90%;
  height: 484px;
`;

const IndicatorTitle = styled.div`
  font-family: "MinSans-Regular";
  font-weight: 900;
  font-size: 17px;
`;

const Greyfont = styled.p`
  margin-left: 10px;
  font-family: "MinSans-Regular";
  color: #7b829b;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  display: inline;
`;

const Detailbutton = styled.div`
  width: 82px;
  height: 31px;
  background-color: #ff6622;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
`;

const Barcard = styled.div`
  width: 60%;
  height: 484px;
`;

const Piecard = styled.div`
  width: 27%;
  height: 484px;
`;
