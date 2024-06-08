import React from "react";
import { Button, Card as CardUi, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";

type props = {
  title: string;
  children: React.ReactNode;
  button: string;
};

export default function Card({ title, children, button }: props) {
  return (
    <CardUi className="mt-6 w-full max-w-md rounded-lg bg-white p-0 shadow">
      <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <CardHeader>
          <h1 className="text-xl font-bold leading-tight tracking-tighter text-gray-900 md:text-2xl">{title}</h1>
        </CardHeader>
        <Divider />
        <CardBody>{children}</CardBody>
        {/* <Divider /> */}
        <CardFooter>
          Footer
          {/*<Button color="primary" className="mx-auto w-[70%]">
            {button}
          </Button>*/}
        </CardFooter>
      </div>
    </CardUi>
  );
}
