import axios from "axios";

import { AiFillGithub } from "react-icons/Ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useShopModal from "@/components/hooks/useShopModal";

import Modal from "./Modal";
import Input from "@/styles/Input";
import Heading from "@/styles/Heading";
import Button from "@/styles/Button";

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
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="상점을 등록 합니다" />
      <Input
        id="name"
        label="상점명"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="businessNumber"
        label="사업자번호"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="contactNumber"
        label="연락처"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="ownerName"
        label="점주명"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="shopDescription"
        label="상점설명"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className="mt-3">
        <p>상점 사진 선택</p>
        <div className="flex items-center space-x-6">
          {/* <img className="object-cover w-16 h-16 rounded-full" src="" /> */}
          <label className="block">
            <input
              type="file"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 "
            />
          </label>
        </div>
      </div>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-2 p-6">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="mt-4 font-light text-center text-neutral-500">
        <p>
          Already have an account?
          <span
            onClick={shopModal.onClose}
            className="cursor-pointer text-neutral-800 hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={shopModal.isOpen}
      onClose={shopModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
      title="상점 등록"
      body={bodyContent}
      actionLabel="등록 하기"
    />
  );
};

export default ShopModal;
