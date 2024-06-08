"use client";

import React from "react";
import { Input, Button } from "@nextui-org/react";
import { UserIcon, PasswordIcon, EyeFilledIcon, EyeSlashFilledIcon } from "@/lib/icons";

import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { loginUser } from "@/features/auth/redux/authSlice";
import { IFormLoginInputs } from "@/types/authTypes";

export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const dispatch = useAppDispatch();
  const { isLoading, message } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginInputs>({
    defaultValues: {
      username: "twitoorel1",
      password: "Ot2521ot",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmitLogin = async (data: IFormLoginInputs) => {
    try {
      await dispatch(loginUser([data]));
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)} className="space-y-4 md:space-y-6">
      <div className="mb-6">
        <Input {...register("username")} type="text" variant="underlined" placeholder="שם משתמש" labelPlacement="inside" startContent={<UserIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />} />
      </div>
      <div className="mb-6">
        <Input
          {...register("password")}
          variant="underlined"
          placeholder="סיסמה"
          labelPlacement="inside"
          startContent={<PasswordIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
          endContent={
            <button type="button" onClick={toggleVisibility} className="focus:outline-none">
              {isVisible ? <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" /> : <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
      </div>

      <div className="flex justify-center">
        <Button type="submit" color="primary" className="mx-auto w-[70%]">
          התחבר
        </Button>
      </div>
    </form>
  );
}
