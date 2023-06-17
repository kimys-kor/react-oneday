import styled from "styled-components";
import { useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";

import Checkbox from "@/styles/Checkbox";

type AppFormData = {
  id: string;
  img: string;
  version: string;
  number: string;
  code: string;
  korname: string;
  engname: string;
  rejoinday: number;
  terms: string;
  privacy: string;
  google: string;
  onestore: string;
  appstore: string;
};

const resolver: Resolver<AppFormData> = async (values) => {
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
  handleAddForm: () => void;
  isAddAppOpen: boolean;
}

function RiderForm({ handleAddForm, isAddAppOpen }: AdminFormProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppFormData>({ resolver });
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
      onClick={handleAddForm}
      style={{ display: isAddAppOpen ? "flex" : "none" }}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        <Formbox>
          <Form onSubmit={onSubmit}>
            <Titlebox>
              <Title>기사를 등록합니다</Title>
              <Flex>
                <Canclebutton onClick={() => handleAddForm()}>
                  취소
                </Canclebutton>
                <Submitbutton type="submit" value="+기사등록" />
              </Flex>
            </Titlebox>

            <Divide></Divide>

            <Flex>
              <Thumbnail>
                <Label>기사프로필</Label>
                <Input type="file" {...register("img")} />
              </Thumbnail>
            </Flex>

            <Flex>
              <Thirdinputbox>
                <Label>기사명</Label>
                <Input type="text" {...register("version")} />
              </Thirdinputbox>

              <Thirdinputbox>
                <Label>기사연락처</Label>
                <Input type="text" {...register("number")} />
              </Thirdinputbox>

              <Thirdinputbox>
                <Label>이메일</Label>
                <Input type="text" {...register("code")} />
              </Thirdinputbox>
            </Flex>

            <Flex>
              <Oneinputbox>
                <Label>활동지역</Label>
                <Input type="text" {...register("korname")} />
              </Oneinputbox>
            </Flex>
          </Form>
        </Formbox>
      </Modal>
    </FormWrapper>
  );
}
export default RiderForm;

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
  height: 35%;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;

  overflow-y: auto;
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

const Thumbnail = styled.div`
  width: 100%;
`;

const Oneinputbox = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Secondinputbox = styled.div`
  margin-top: 20px;
  width: 50%;
`;

const Thirdinputbox = styled.div`
  margin-top: 20px;
  width: 33%;
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
  border: 1px solid transparent;

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

const CheckList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
