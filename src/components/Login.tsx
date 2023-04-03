import { useState } from "react";
import styled from "styled-components";

import { useUserStore } from "@/data/status/status";

import { useForm, Resolver } from "react-hook-form";

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Leftbox = styled.div`
  width: 50%;
  background-color: #f2f3f7;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Leftwrapper = styled.div``;

const LoginIcon = styled.img`
  width: 404px;
  height: 404px;
`;

const Titlebox = styled.div`
  margin-top: 20px;
  color: #9f8add;
  font-size: 35px;
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
  background-color: #f7f7f9;
  width: 50%;
  height: 300px;
  border-radius: 6px;
  box-shadow: 4px 4px 4px 5px rgba(168, 165, 165, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 30px;
  width: 80%;
  height: 35px;
  border: 1px solid #9f8add;
  background-color: #f7f7f9;
`;

const Submitbutton = styled.input`
  margin-top: 30px;
  border: none;
  width: 80%;
  height: 50px;
  color: #9f8add;
  font-size: 14px;
  letter-spacing: 0.2rem;
  border: 1px solid #9f8add;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #9f8add;
    color: #fff;
  }
`;

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
  });

  return (
    <Layout>
      <Leftbox>
        <Leftwrapper>
          <LoginIcon></LoginIcon>
        </Leftwrapper>
      </Leftbox>
      <Rightbox>
        <Form onSubmit={onSubmit}>
          <Titlebox>원데이{isLoggedIn}</Titlebox>

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
          <Submitbutton type="submit" value="로그인"></Submitbutton>
        </Form>
      </Rightbox>
    </Layout>
  );
}

export default Login;
