import { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { shoplocation } from "@/data/shop/shopData";
import { useForm, Resolver } from "react-hook-form";

import Board from "@common/Board";
import { useUserStore } from "@data/status/status";

type FormData = {
  firstName: string;
  lastName: string;
  shopName: string;
  businessNumber: number;
  ownerName: string;
  shopAddress: string;
  shopContact: number;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

function Shop() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Shopbox>
      <Title>상점관리</Title>
      <Flexbox>
        <Fillterbox>
          {shoplocation.map((item, index) => (
            <Fillterbutton key={index}>{item}</Fillterbutton>
          ))}
        </Fillterbox>
        <Addbutton onClick={handleModalOpen}>
          <Plus></Plus>상점등록
        </Addbutton>
      </Flexbox>
      <Card>
        <Board></Board>
      </Card>

      <Wrapper
        onClick={handleModalClose}
        style={{ display: isModalOpen ? "flex" : "none" }}
      >
        <Modal onClick={(e) => e.stopPropagation()}>
          <Formbox>
            <Title>상점등록</Title>
            <Form onSubmit={onSubmit}>
              <Inputbox>
                <label>
                  상점명<Star>*</Star>
                </label>{" "}
                <Input type="text" {...register("shopName")}></Input>
              </Inputbox>

              <Inputbox>
                <label>
                  사업자번호<Star>*</Star>
                </label>{" "}
                <Input type="number" {...register("businessNumber")}></Input>
              </Inputbox>

              <Inputbox>
                <label>
                  대표자명<Star>*</Star>
                </label>
                <Input type="text" {...register("ownerName")}></Input>
              </Inputbox>

              <Inputbox>
                <label>
                  주소<Star>*</Star>
                </label>
                <Input type="text" {...register("shopAddress")}></Input>
              </Inputbox>

              <Inputbox>
                <label>
                  연락처<Star>*</Star>
                </label>
                <Input type="number" {...register("shopContact")}></Input>
              </Inputbox>

              <Flex>
                <Canclebutton onClick={() => handleModalClose()}>
                  취소{" "}
                </Canclebutton>
                <Submitbutton type="submit" value="저장" />
              </Flex>
            </Form>
          </Formbox>
        </Modal>
      </Wrapper>
    </Shopbox>
  );
}

export default Shop;

const Shopbox = styled.div`
  margin-top: 20px;
  width: 90%;
  height: 66px;
`;

const Title = styled.p`
  font-size: 35px;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const Fillterbox = styled.div`
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Fillterbutton = styled.div`
  color: #8a9099;
  width: 70px;
  height: 50px;
  color: #8a9099;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #304ffd;
  }
`;

const Addbutton = styled.span`
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #304ffd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1536f5;
  }
`;

const Plus = styled(AiOutlinePlus)`
  margin-right: 5px;
`;

const Card = styled.div`
  margin-top: 50px;
  width: 100%;

  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Formbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inputbox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  label {
    width: 20%;
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #304ffd;
  width: 70%;
`;

const Canclebutton = styled.div`
  margin-top: 50px;
  border: none;
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #304ffd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1536f5;
  }
`;
const Submitbutton = styled.input`
  margin-top: 50px;
  border: none;
  width: 100px;
  height: 50px;
  color: #304ffd;
  font-size: 14px;
  letter-spacing: 0.2rem;
  border: 1px solid #304ffd;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1536f5;
    color: #fff;
  }
`;

const Star = styled.p`
  display: inline;
  margin-left: 3px;
  color: red;
`;
