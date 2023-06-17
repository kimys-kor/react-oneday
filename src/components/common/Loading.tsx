import styled from "styled-components";
import { MoonLoader } from "react-spinners";

export default () => {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <MoonLoader size={100} color="#ff6622" />
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 300;
  right: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: "translate(-50%, -50%)";
`;

const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
  margin-bottom: 50px;
`;
