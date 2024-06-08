"use client";

import React from "react";
import { Input, Button } from "@nextui-org/react";
import { UserIcon, PasswordIcon, EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "@/lib/icons";

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
      // username: "twitoorel1",
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
    <div className="flex flex-col">
      <div className="mb-6 flex w-full flex-wrap gap-4 md:mb-0 md:flex-nowrap">
        <Input type="email" label="Email" placeholder="you@example.com" labelPlacement="outside" startContent={<MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />} />
      </div>
    </div>
  );
}

{
  /*
      // <form onSubmit={handleSubmit(onSubmitLogin)} className="space-y-4 md:space-y-6">
      {/* <div className="mb-6 flex w-full flex-wrap gap-4 md:mb-0 md:flex-nowrap">
        <Input
          type="email"
          // label="Email"
          classNames={{
            input: "bg-transparent outline-none focus:border-none border-none focus:outline-none placeholder:text-primary hover:bg-primary",
            innerWrapper: "bg-transparent outline-none",
            inputWrapper: "outline-none bg-transparent group-data-[focus=true]:bg-default-200/50",
          }}
          placeholder="שם משתמש"
          labelPlacement="inside"
          startContent={<UserIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />}
        />
      </div> */
}

{
  /* <div className="relative mb-6">
        <Input
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90 bg-slate-900",
            input: ["bg-transparent bg-slate-900", "text-black/90 dark:text-white/90", "placeholder:text-default-700/50 dark:placeholder:text-white/60"],
            innerWrapper: "bg-transparent bg-slate-900",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
              "flex",
              "items-center",
              "bg-slate-900",
            ],
          }}
          {...register("username")}
          type="text"
          placeholder="שם משתמש"
          startContent={<UserIcon className="absolute ml-3" />} // הוספת מרווח משמאל
        />
      </div> */
}

{
  /* <div className="mb-6">
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

    //   <div className="flex justify-center">
    //     <Button type="submit" color="primary" className="w-[70%]">
    //       התחבר
    //     </Button>
    //   </div>
    // </form>
*/
}
