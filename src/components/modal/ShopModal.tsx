import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

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

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const ShopForm: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto">
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div className="relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none translate lg:h-auto md:h-auto focus:outline-none">
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="absolute p-1 transition border-0 hover:opacity-70 left-9"
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}
              <div className="relative flex-auto p-6"></div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center w-full gap-4 ">
                  {secondaryAction && secondaryActionLabel && <button />}
                  <button disabled={disabled} onClick={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopForm;

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
