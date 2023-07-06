import axios from "axios";

import { AiFillGithub } from "react-icons/Ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useShopModal from "@/components/hooks/useShopModal";

import Modal from "./Modal";
import Input from "@/styles/Input";
import Heading from "@/styles/Heading";
import Button from "@/styles/Button";
import Post from "../common/Post";
import UploadImages from "../common/Uploadimages";

import { AiOutlineArrowLeft } from "react-icons/Ai";

const ShopModal = () => {
  const shopModal = useShopModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      businessNumber: "",
      contactNumber: "",
      ownerName: "",
      shopDescription: "",
    },
  });

  const [visible, setVisible] = useState(false); // 우편번호 컴포넌트의 노출여부 상태

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setVisible(false);
  };

  const [view, setView] = useState(1);
  const [firstData, setFirstData] = useState<Object>();

  interface SecondData {
    zipcode: number;
    fullAddress: string;
    restAddress: string;
    profile: File;
  }

  const [secondData, setSecondData] = useState<Object>({
    zipcode: 0,
    fullAddress: "",
    restAddress: "",
    profile: null,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setView(2);
    setFirstData(data);
  };

  const [zipcode, setZipcode] = useState<number>(0);
  const [fullAddress, setFullAddress] = useState<String>("");

  useEffect(() => {
    console.log(zipcode, fullAddress);
  }, [zipcode, fullAddress]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      {view == 1 && (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input
            id="name"
            label="상점명"
            type="text"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="businessNumber"
            label="사업자번호"
            type="number"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="contactNumber"
            label="연락처"
            type="number"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          <Input
            id="ownerName"
            label="점주명"
            type="text"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="shopDescription"
            label="상점설명"
            type="text"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          <Button disabled={isLoading} label={"다음"} onClick={onSubmit} />
        </form>
      )}

      {view == 2 && (
        <div className="mt-3">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <input
                  placeholder="우편번호"
                  className="w-1/3 h-10 border border-black rounded-md"
                  defaultValue={zipcode}
                ></input>
                <button
                  onClick={() => setView(3)}
                  className="p-2 font-semibold text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                >
                  우편번호 검색
                </button>
              </div>

              <div>
                <input
                  placeholder="상세주소"
                  className="w-2/3 h-10 border border-black rounded-md"
                  defaultValue={fullAddress}
                ></input>
              </div>
            </div>

            <div>
              <UploadImages></UploadImages>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setView(1)}
                className="w-[100%] p-2 font-semibold text-black bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 focus:ring-2  focus:ring-opacity-75"
              >
                이전
              </button>

              <Button disabled={isLoading} label={"다음"} onClick={onSubmit} />
            </div>
          </div>
        </div>
      )}

      {view == 3 && (
        <div>
          <Post
            setView={setView}
            setZipcode={setZipcode}
            setFullAddress={setFullAddress}
          ></Post>
          <Button
            disabled={isLoading}
            label={"이전"}
            onClick={() => {
              setView(2);
            }}
          />
        </div>
      )}
    </div>
  );

  // const footerContent = (
  //   <div className="flex flex-col gap-2 p-6">
  //     <hr />
  //     <Button
  //       outline
  //       label="Continue with Google"
  //       icon={FcGoogle}
  //       onClick={() => {}}
  //     />
  //     <Button
  //       outline
  //       label="Continue with Github"
  //       icon={AiFillGithub}
  //       onClick={() => {}}
  //     />
  //     <div className="mt-4 font-light text-center text-neutral-500">
  //       <p>
  //         Already have an account?
  //         <span
  //           onClick={shopModal.onClose}
  //           className="cursor-pointer text-neutral-800 hover:underline"
  //         >
  //           Log in
  //         </span>
  //       </p>
  //     </div>
  //   </div>
  // );

  return (
    <Modal
      isOpen={shopModal.isOpen}
      onClose={shopModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
      title="상점 등록"
      body={bodyContent}
      setView={setView}
    />
  );
};

export default ShopModal;
