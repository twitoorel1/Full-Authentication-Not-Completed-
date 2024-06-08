"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}
