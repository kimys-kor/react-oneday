import axios from "axios";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRiderModal from "@/components/hooks/useRiderModal";

import Modal from "./Modal";
import Input from "@/styles/Input";
import Button from "@/styles/Button";

const ShopModal = () => {
  const riderModal = useRiderModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Input
          id="name"
          label="라이더명"
          type="text"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="phone"
          label="핸드폰"
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          label="이메일"
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Button disabled={isLoading} label={"다음"} onClick={onSubmit} />
      </form>
    </div>
  );

  return (
    <Modal
      isOpen={riderModal.isOpen}
      onClose={riderModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
      title="기사 등록"
      body={bodyContent}
    />
  );
};

export default ShopModal;
