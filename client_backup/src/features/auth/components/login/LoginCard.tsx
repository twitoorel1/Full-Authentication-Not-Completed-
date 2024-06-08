import SlimLayout from "@/components/SlimLayout";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <SlimLayout>
      <h1 className="mb-3 text-xl font-bold leading-tight tracking-tighter text-gray-900 md:text-2xl">התחברות לחשבון שלך</h1>
      <LoginForm />
    </SlimLayout>
  );
}

{
  /*
  import Card from "@/components/common/Card";
  import Image from "next/image";
  import Link from "next/link";
  import React from "react";

  <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 lg:py-0">
      <Link href={"/"} className="flex items-center">
        <h1 className="text-3xl font-semibold text-gray-900">לוגו</h1>
        <Image src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"} alt="Logo" width={"30"} height={"30"} className="mr-2 h-8 w-8" />
      </Link>
      <Card title="התחבר עם החשבון שלך" button="התחבר">
        <LoginForm />
      </Card>
    </div>
*/
}
