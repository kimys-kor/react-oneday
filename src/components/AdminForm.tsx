import styled from "styled-components";
import { useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";

import { adminAuthority } from "@/data/admin/adminData";
import Checkbox from "@/styles/checkbox/Checkbox";

type FormData = {
  position: string;
  name: string;
  id: string;
  password: string;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.id ? values : {},
    errors: !values.id
      ? {
          id: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

interface AdminFormProp {
  handleAddAdmin: () => void;
  isAddAdminOpen: boolean;
}

function AdminForm({ handleAddAdmin, isAddAdminOpen }: AdminFormProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      return;
    }
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      return;
    }
    return;
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const isChecked = e.target.checked;
    checkedItemHandler(value, isChecked);
  };

  useEffect(() => {
    console.log(checkedList);
  }, [checkedList]);

  return (
    <FormWrapper
      onClick={handleAddAdmin}
      style={{ display: isAddAdminOpen ? "flex" : "none" }}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        <Formbox>
          <Form onSubmit={onSubmit}>
            <Titlebox>
              <Title>새로운 어드민 계정을 추가합니다</Title>
              <Flex>
                <Canclebutton onClick={() => handleAddAdmin()}>
                  취소
                </Canclebutton>
                <Submitbutton type="submit" value="저장" />
              </Flex>
            </Titlebox>

            <Divide></Divide>

            <Flex>
              <Inputbox>
                <Label>직책</Label>
                <Input type="text" {...register("position")} />
              </Inputbox>

              <Inputbox>
                <Label>이름</Label>
                <Input type="number" {...register("name")} />
              </Inputbox>
            </Flex>

            <Flex>
              <Inputbox>
                <Label>계정 ID</Label>
                <Input type="text" {...register("id")} />
              </Inputbox>

              <Inputbox>
                <Label>비밀번호</Label>
                <Input type="number" {...register("password")} />
              </Inputbox>
            </Flex>

            <Authority>
              <Greyfont4>권한</Greyfont4>
              {adminAuthority.map((item, index) => (
                <Checkbox
                  key={index}
                  handleChange={checkHandler}
                  text={item}
                  checked={checkedList.includes(item)}
                ></Checkbox>
              ))}
            </Authority>
          </Form>
        </Formbox>
      </Modal>
    </FormWrapper>
  );
}
export default AdminForm;

const FormWrapper = styled.div`
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
  width: 53%;
  height: 55%;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;

  overflow-y: scroll;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Formbox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const Inputbox = styled.div`
  margin-top: 20px;
  width: 50%;
`;
const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 37px;
`;

const Canclebutton = styled.div`
  border: none;
  width: 144px;
  height: 37px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #a8adc0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #a8adc0;
    border: 1px solid #a8adc0;
  }
`;
const Submitbutton = styled.input`
  border: none;
  width: 144px;
  height: 37px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #ff6622;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #ff6622;
    border: 1px solid #ff6622;
  }
`;

const Titlebox = styled.div`
  margin-bottom: 30px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  color: #a8adc0;
  font-size: 16px;
  font-family: "MinSans-Regular";
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const Authority = styled.div`
  margin-top: 32px;
`;

const Greyfont4 = styled.div`
  color: #a8adc0;
  width: 180px;
  height: 30px;

  font-family: "MinSans-Bold";
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
