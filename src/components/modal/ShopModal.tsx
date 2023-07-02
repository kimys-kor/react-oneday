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
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
      title="Register"
      body={bodyContent}
      footer={footerContent}
      actionLabel="Continue"
    />
  );
};

export default ShopModal;
