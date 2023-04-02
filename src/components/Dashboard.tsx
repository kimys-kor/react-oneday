import styled from "styled-components";

const Dashboardbox = styled.div`
  margin-top: 20px;
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
`;

const Shipbox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

const Indicatorbox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

const Chartbox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 200px;
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

const Detailbox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  width: 100%;
  height: 300px;
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

const Shipcard = styled.div`
  border-radius: 6px;
  width: 49%;
  height: 100%;
  background-color: #fff;
`;

const Indicatorcard = styled.div`
  border-radius: 6px;
  width: 33%;
  height: 100%;
  background-color: #fff;
`;

const Chartcard = styled.div`
  border-radius: 6px;
  width: 49%;
  height: 100%;
  background-color: #fff;
`;

const Orderscard = styled.div`
  border-radius: 6px;
  width: 70%;
  height: 100%;
  background-color: #fff;
`;
const Membercard = styled.div`
  border-radius: 6px;
  width: 30%;
  height: 100%;
  background-color: #fff;
`;

function Dashboard() {
  return (
    <Dashboardbox>
      <Shipbox>
        <Shipcard>배차완료주문</Shipcard>
        <Shipcard>배차미완료주문</Shipcard>
      </Shipbox>

      <Indicatorbox>
        <Indicatorcard>매출</Indicatorcard>
        <Indicatorcard>수익</Indicatorcard>
        <Indicatorcard>주문건수</Indicatorcard>
      </Indicatorbox>

      <Chartbox>
        <Chartcard>매출차트</Chartcard>
        <Chartcard>주문차트</Chartcard>
      </Chartbox>

      <Detailbox>
        <Orderscard>최근주문내역</Orderscard>
        <Membercard>가입회원</Membercard>
      </Detailbox>
    </Dashboardbox>
  );
}

export default Dashboard;
