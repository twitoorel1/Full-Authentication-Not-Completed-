"use client";

import { api } from "@/utils/api";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { logoutUser } from "@/features/auth/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export default function HeaderMain() {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <header className="">
      {/* <Navbar /> */}
      <Sidebar />
     </header>
  );
}

{
  /* const handleLogoutUser = async () => {
    try {
      await dispatch(logoutUser());
      router.push("/login");
    } catch (error: any) {
      console.log(error);
    }
  };
   <Button onClick={handleLogoutUser} color="primary" variant="solid">
    Logout
  </Button> */
}
