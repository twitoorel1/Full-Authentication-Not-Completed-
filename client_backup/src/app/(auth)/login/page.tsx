import React from "react";
import LoginCard from "@/features/auth/components/login/LoginCard";

export const dynamic = "force-static";

export default function LoginPage() {
  return (
    <div>
      Test Test SSG
      <LoginCard />
    </div>
  );
}
