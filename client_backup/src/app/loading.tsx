import React from "react";

export default function Loading() {
  return (
    <section className="absolute right-0 top-0 flex h-full w-full place-items-center justify-center">
      <span className="loader"></span>
    </section>
  );
}

// import useLoader from "@/hooks/useLoader";
// import Loader from "@/components/Loader";
//   const isLoading = useLoader(2000);
// {isLoading ? <Loader /> : children}
