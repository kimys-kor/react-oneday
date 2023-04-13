import styled from "styled-components";

interface SummaryProps {
  title: string;
  subTitle1: string;
  subTitle2: string;
}

function Summary({ title, subTitle1, subTitle2 }: SummaryProps) {
  return (
    <SummaryContainer>
      <SummaryTitle>
        <Titlebox>
          <Title>{title}</Title>
          <SummaryDetail>자세히 </SummaryDetail>
        </Titlebox>
      </SummaryTitle>
      <SummaryContent>
        <SubTitle1>{subTitle1}</SubTitle1>
        <SubTitle2>{subTitle2}</SubTitle2>
      </SummaryContent>
    </SummaryContainer>
  );
}

const SummaryContainer = styled.div`
  box-sizing: border-box;
  width: 350px;
  height: 149px;
  border: 1px solid #bbbbcf;
`;

const SummaryTitle = styled.div`
  width: 100%;
  height: 48px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SummaryContent = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  font-family: "MinSans-Regular";
  font-weight: 700;
`;

const SubTitle1 = styled.div`
  color: #7b829b;
  font-size: 15px;
`;

const SubTitle2 = styled.div`
  margin-top: 10px;
  color: #ff6622;
  font-size: 20px;
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

export default Summary;
