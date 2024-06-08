import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/loader.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import Loading from "./loading";
import { Suspense } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressContentEditableWarning={true}>
      <body suppressHydrationWarning={true}>
        <Suspense key={Date.now()} fallback={<Loading />}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}