import { useState } from "react";
import styled from "styled-components";

import BorderButton from "@/styles/button/BorderButton";
import CustomSelect from "@/styles/selectbox/CustomSelect";

import { eaOptions } from "@/data/selectbox/selectboxData";
import { product } from "@/data/product/productData";
import ShopOrderBoard from "@common/board/ShopOrderBoard";
import { shopOrderBoardTitle, shopOrdertBoardData } from "@data/shop/shopData";

interface ShopDetailProps {
  onClose: () => void;
  isDetailOpen: boolean;
  product: product | undefined;
}

function ProductDetail({ onClose, isDetailOpen, product }: ShopDetailProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleButtonClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [currentEa, setCurrentEa] = useState(eaOptions[0].value);

  return (
    <Wrapper isDetailOpen={isDetailOpen}>
      <Modal isDetailOpen={isDetailOpen} onClick={(e) => e.stopPropagation()}>
        <Layout>
          <Headerbox>
            <Button onClick={onClose}>&lt;</Button>
          </Headerbox>

          <Content>
            <Left>
              <Titlebox>
                <LeftButton>상품 정보</LeftButton>
              </Titlebox>
              <LeftContent>
                <Row>
                  <Greyfont1>상품 ID</Greyfont1>
                  <Blackfont1>{product?.id}</Blackfont1>
                </Row>
                <Row>
                  <Greyfont1>매장명</Greyfont1>
                  <Blackfont1>{product?.shopName}</Blackfont1>
                </Row>

                <Row>
                  <Greyfont1>상품명</Greyfont1>
                  <Blackfont1>{product?.productName}</Blackfont1>
                </Row>

                <Row>
                  <Greyfont1>옵션</Greyfont1>
                  <Blackfont1>{product?.option}</Blackfont1>
                </Row>

                <Row>
                  <Greyfont1>등록일</Greyfont1>
                  <Blackfont1>{product?.createdDt}</Blackfont1>
                </Row>

                <Row>
                  <Greyfont1>재고수량</Greyfont1>
                  <Blackfont1>{product?.inventory}</Blackfont1>
                </Row>
              </LeftContent>
            </Left>

            <Right>
              <Titlebox>
                <Buttonbox>
                  <BorderButton
                    width={151}
                    titles={["주문내역"]}
                    activeIndex={activeIndex}
                    handleButtonClick={handleButtonClick}
                  ></BorderButton>
                </Buttonbox>
                <CustomSelect
                  width={90}
                  height={37}
                  optionData={eaOptions}
                  currentValue={currentEa}
                  setCurrentValue={setCurrentEa}
                ></CustomSelect>
              </Titlebox>
              <RightContent>
                <ShopOrderBoard
                  index={0}
                  boardMenu={shopOrderBoardTitle}
                  boardData={shopOrdertBoardData}
                ></ShopOrderBoard>
              </RightContent>
            </Right>
          </Content>
        </Layout>
      </Modal>
    </Wrapper>
  );
}

export default ProductDetail;

interface WrapperProps {
  isDetailOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;

  /* add transition and transform properties */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  opacity: ${({ isDetailOpen }) => (isDetailOpen ? "1" : "0")};
  transform: ${({ isDetailOpen }) =>
    isDetailOpen ? "translateX(0%)" : "translateX(100%)"};
`;

const Modal = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-color: ${({ isDetailOpen }) =>
    isDetailOpen ? "#fff" : "#3e4042"};
  transition: opacity 1.5s ease-out;
`;

const Layout = styled.div`
  width: 85%;
`;

const Headerbox = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-bottom: 1px solid #bbbbcf;
`;

const LeftButton = styled.div`
  line-height: 37px;
  text-align: center;
  font-family: "MinSans-Regular";
  font-size: 16px;
  font-weight: 300;
  width: 151px;
  height: 37px;

  border: 1px solid #ff6622;
  background-color: #ffffff;
  color: #ff6622;
  margin-right: 0;
`;

const Button = styled.div`
  box-sizing: border-box;
  border: 1px solid #bbbbcf;
  width: 37px;
  height: 37px;
  background-color: #fff;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  cursor: pointer;
  :hover {
    border-color: #ff6622;
    color: #ff6622;
  }
`;

const Content = styled.div`
  margin-top: 12px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 33%;
`;

const Titlebox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const RightContent = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;

  overflow: hidden;
`;

const Right = styled.div`
  width: 63%;
`;

const Buttonbox = styled.div`
  display: flex;
`;

const LeftContent = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  border: 1px solid #bbbbcf;
  padding: 32px 36px 47px 36px;
`;

const Row = styled.div`
  margin-top: 14px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Emailbox = styled.div`
  width: 60%;
`;

const Iconbox = styled.div`
  width: 20px;
  cursor: pointer;
  position: relative;
  top: -6px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Greyfont1 = styled.div`
  color: #a8adc0;
  width: 120px;
  height: 30px;

  line-height: 100%;
  font-family: "MinSans-Bold";
  font-size: 16px;
  letter-spacing: -0.04em;
`;

const Blackfont1 = styled.div`
  color: #43454b;
  height: 30px;

  line-height: 100%;
  font-size: 16px;
  letter-spacing: -0.04em;
`;

const Divide = styled.div`
  width: 100%;
  height: 17px;
  border-bottom: 1px solid #e3e6f2;
  margin-bottom: 32px;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
`;

const PointInput = styled.input`
  width: 80%;
  border: 1px solid #bbbbcf;

  text-align: center;
  font-family: "MinSans-Regular";
  font-size: 16px;
`;

const Submitbutton = styled.input`
  border: none;
  width: 20%;
  height: 50px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #ff6622;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Optionbox = styled.div`
  width: 99px;
  height: 81px;
  border: 1px solid #bbbbcf;
  box-shadow: 0px 12px 12px rgba(30, 32, 38, 0.1);
  text-align: center;
  background-color: #fff;

  position: absolute;
  left: -80px;
  z-index: 10;
`;

const Option = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #bbbbcf;

  &:hover {
    color: #ff6622;
  }
`;
