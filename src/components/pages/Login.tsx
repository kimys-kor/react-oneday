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
            <Footerfonts1>{footertext1}</Footerfonts1>
            <Footerfonts1>{footertext2}</Footerfonts1>
            <Footerfonts2>{footertext3}</Footerfonts2>
          </Footer>
        </Leftwrapper>
      </Leftbox>
      <Rightbox>
        <Form onSubmit={onSubmit}>
          <Titlebox>
            <Title>Admin Login to ONEDAY</Title>
            <Divide>━━━━━━━━━━━━━</Divide>
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
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loginicon = styled.img`
  width: 404px;
  height: 404px;
`;

const Leftfont1 = styled.p`
  font-size: 24px;
  font-family: "Minsans-Regular";
  font-weight: 400;
  line-height: 30px;

  color: #898ea1;
`;

const Leftfont2 = styled.p`
  font-size: 18px;
  font-family: "Minsans-Regular";
  font-weight: 400;
  line-height: 28px;
  color: #898ea1;
  margin: 0;
`;

const Footer = styled.div`
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footerfonts1 = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: "Minsans-Regular";
  line-height: 19px;
  color: #a8adc0;
  letter-spacing: -0.04em;
`;

const Footerfonts2 = styled.p`
  margin-top: 24px;
  font-size: 14px;
  font-family: "Minsans-Regular";
  line-height: 19px;
  color: #a8adc0;
  letter-spacing: -0.04em;
`;

const Titlebox = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  line-height: 100%;
  width: 260px;
  color: #000;
  font-size: 28px;
  font-weight: 700;
`;

const Divide = styled.div`
  line-height: 100%;
  margin-left: 10px;
  color: #ff6622;
  font-weight: 700;
`;

const Rightbox = styled.div`
  width: 50%;
  background-color: #fff;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: #fff;
  width: 50%;
  height: 300px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 30px;
  width: 100%;
  height: 52px;
  border: 1px solid #bbbbcf;
  background-color: #fff;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #a8adc0;
    font-family: "MinSans-Regular";
  }
  &::placeholder :last-child {
    font-weight: 400;
  }
`;

const Submitbutton = styled.input`
  margin-top: 30px;
  border: none;
  width: 100%;
  height: 52px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #ff6622;
  border-radius: 5px;
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
`;

const LoginContact = styled.img`
  width: 15px;
  height: 15px;
`;

const LoginContactfont = styled.div`
  text-decoration: underline;
  font-family: "Minsans-Regular";
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #898ea2;
`;
