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
  width: 45rem;
  height: 9.3125rem;
  border: 1px solid #bbbbcf;
`;

const SummaryTitle = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SummaryContent = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-family: "MinSans-Regular";
  font-weight: 700;

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubTitle1 = styled.p`
  color: #7b829b;
  font-size: 15px;

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubTitle2 = styled.p`
  margin-top: 10px;
  color: #ff6622;
  font-size: 20px;

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Titlebox = styled.div`
  width: 80%;
  height: 100%;
  border-bottom: 1px solid #bbbbcf;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SummaryDetail = styled.p`
  font-size: 13px;
  display: inline;
  color: #898ea1;

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default Summary;
