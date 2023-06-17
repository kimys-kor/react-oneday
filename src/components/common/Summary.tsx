import styled from "styled-components";

interface SummaryProps {
  title: string;
  subTitle1: string;
  subTitle2: string;
}

function Summary({ title, subTitle1, subTitle2 }: SummaryProps) {
  return (
    <Wrapper>
      <Titlezone>
        <Titlebox>
          <Title>{title}</Title>
          <Detailbutton>자세히 </Detailbutton>
        </Titlebox>
      </Titlezone>
      <Content>
        <SubTitle1>{subTitle1}</SubTitle1>
        <SubTitle2>{subTitle2}</SubTitle2>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 30rem;
  height: 9.3125rem;
  border: 1px solid #bbbbcf;
  transition: all 0.01s linear;

  &:hover {
    border: 1px solid #ff6622;
    box-shadow: 1px 1px 3px 1px rgba(241, 145, 35, 0.2);
  }

  @media (max-width: 1150px) {
    width: auto;
  }
`;

const Titlezone = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Titlebox = styled.div`
  width: 80%;
  height: 100%;
  border-bottom: 1px solid #bbbbcf;
  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
`;

const Content = styled.div`
  margin-top: 1.25rem;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-weight: 700;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubTitle1 = styled.p`
  color: #7b829b;
  font-size: 0.9375rem;
`;

const SubTitle2 = styled.p`
  margin-top: 10px;
  color: #ff6622;
  font-size: 1.25rem;
`;

const Detailbutton = styled.p`
  font-size: 0.8125rem;
  display: inline;
  color: #898ea1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default Summary;
