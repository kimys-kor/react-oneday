import { useState } from "react";
import styled from "styled-components";
import { useUserStore } from "@data/status/status";
import { useForm, Resolver } from "react-hook-form";

import {
  text1,
  text2,
  footertext1,
  footertext2,
  footertext3,
} from "@/data/login/loginData";

import loginicon from "@images/login/loginicon.png";
import logincontact from "@images/login/logincontact.png";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

function Login() {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useUserStore();
  console.log(isLoggedIn);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => {
    setIsLoggedIn(true);
    console.log(data);
    navigate("/oneday/dashboard");
  });

  return (
    <Layout>
      <Leftbox>
        <Leftwrapper>
          <Loginicon src={loginicon}></Loginicon>
          <Leftfont1>원데이 통합 관리 대시보드</Leftfont1>
          <Leftfont2>{text1}</Leftfont2>
          <Leftfont2>{text2}</Leftfont2>
          <Footer>
            <Footerfont1>{footertext1}</Footerfont1>
            <Footerfont1>{footertext2}</Footerfont1>
            <Footerfont2>{footertext3}</Footerfont2>
          </Footer>
        </Leftwrapper>
      </Leftbox>
      <Rightbox>
        <Form onSubmit={onSubmit}>
          <Titlebox>
            <Title>Admin Login to ONEDAY</Title>
            <Divide></Divide>
          </Titlebox>

          <Input
            {...register("email")}
            placeholder="이메일을 입력하세요"
            type="text"
          ></Input>
          <Input
            {...register("password")}
            placeholder="비밀번호를 입력하세요"
            type="password"
          ></Input>
          <Submitbutton type="submit" value="관리자 로그인"></Submitbutton>
        </Form>
        <Auto>
          <Flex>
            <AutoLogin type="checkbox" value="autoLogin"></AutoLogin>
            <AutoLabel htmlFor="autoLogin">자동 로그인</AutoLabel>
          </Flex>
          <Flex>
            <LoginContact src={logincontact}></LoginContact>
            <LoginContactfont>관리자 오류문의</LoginContactfont>
          </Flex>
        </Auto>
      </Rightbox>
    </Layout>
  );
}

export default Login;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Auto = styled.div`
  padding-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const Leftbox = styled.div`
  width: 50%;
  background-color: #f2f3f7;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Leftwrapper = styled.div`
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loginicon = styled.img`
  width: 25.25rem;
  height: 25.25rem;
`;

const Leftfont1 = styled.h5`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 30px;

  color: #898ea1;
`;

const LeftSub = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Leftfont2 = styled.p`
  color: #898ea1;
`;

const Footer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footerfont1 = styled.p`
  margin: 0;
  font-family: "minsans";
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 19px;
  color: #a8adc0;
  letter-spacing: -0.04em;
`;

const Footerfont2 = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;

  line-height: 19px;
  color: #bbbbcf;
  letter-spacing: -0.04em;
`;

const Titlebox = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 50%;

  color: #000;
  font-size: 1.45rem;
  font-weight: 700;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 1760px) {
    width: 100%;
  }
`;

const Divide = styled.div`
  width: 50%;
  color: #ff6622;
  border-bottom: 2px solid #ff6622;
  @media (max-width: 1760px) {
    display: none;
  }
`;

const Rightbox = styled.div`
  width: 50%;
  background-color: #fff;

  display: flex;

  flex-direction: column;
  justify-content: center;

  padding: 13rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 3.25rem;
`;

const Input = styled.input`
  width: 100%;
  height: 3.25rem;
  border: 1px solid #bbbbcf;
  background-color: #fff;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #a8adc0;
  }
  &::placeholder :last-child {
    font-weight: 400;
  }
`;

const Submitbutton = styled.input`
  border: none;
  height: 3.25rem;
  color: #fff;
  font-family: "minsans";
  font-size: 0.875rem;
  letter-spacing: 0.2rem;
  background-color: #ff6622;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    border: 1px solid #ff6622;
    color: #ff6622;
  }
`;

const AutoLogin = styled.input`
  width: 24px;
  height: 24px;
  &:checked {
    background-color: #fff;
    color: #898ea1;
  }
`;

const AutoLabel = styled.label`
  font-size: 15px;
  color: #898ea1;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LoginContact = styled.img`
  width: 15px;
  height: 15px;
`;

const LoginContactfont = styled.div`
  text-decoration: underline;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #898ea2;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
