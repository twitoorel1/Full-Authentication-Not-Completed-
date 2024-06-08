"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { IUser } from "@/types/authTypes";
import { getCookie } from "@/utils/cookies";
import { isLoginUser } from "@/features/auth/redux/authSlice";
import { api } from "@/utils/api";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/app/loading";

interface IAuthContextValue {
  isLoading: boolean;
  isError: boolean;
  isAuthenticated: boolean;
  user: IUser | null | undefined;
  isPageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextValue);

type TLayoutProps = {
  children?: ReactNode;
};

export default function AuthProvider({ children }: TLayoutProps) {
  const { isAuthenticated, isLoading, user, isError } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [isPageLoading, setPageLoading] = useState(true);
  const [refreshIntervalId, setRefreshIntervalId] = useState<number | any>(0);

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const rfTokenCookie = getCookie("rf_token");
        console.log(rfTokenCookie);
        if (!rfTokenCookie) return Promise.reject("No refresh token provided");

        const response = await api.post("/api/auth/refreshToken");
        const { accessToken, refreshToken } = response.data;
        api.defaults.headers.authorization = accessToken;

        return Promise.resolve(accessToken);
      } catch (error) {
        console.log("error context refreshToken: ", error);
      }
    };

    const intervalId = setInterval(refreshToken, 1000 * 60 * 60 * 5);
    setRefreshIntervalId(intervalId);

    return () => {
      if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
      }
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated == false && isLoading == false && isPageLoading == false) {
      router.replace("/login");
    }

    if (pathname === "/login" && isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router, isPageLoading, isLoading]);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      dispatch(isLoginUser());
    }

    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [getCookie("token"), dispatch]);

  if (isPageLoading) {
    return <Loading />;
  }

  return <AuthContext.Provider value={{ isAuthenticated, isLoading, user, isError, isPageLoading }}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): IAuthContextValue {
  return useContext(AuthContext);
}

// useEffect(() => {
//   const refreshToken = async () => {
//     try {
//       const token = getCookie("token");
//       console.log(token);
//       // if (!rfTokenCookie) return Promise.reject("No refresh token provided");

//       // const response = await api.post("/api/auth/refreshToken");
//       // const { accessToken, refreshToken } = response.data;
//       // api.defaults.headers.authorization = accessToken;
//       // return Promise.resolve(accessToken);
//     } catch (error) {
//       console.log("error context refreshToken: ", error);
//     }
//   };

//   const intervalId = setInterval(refreshToken, 1000 * 3);
//   console.log(intervalId);
//   // setRefreshIntervalId(intervalId);

//   return () => {
//     if (refreshIntervalId) {
//       clearInterval(refreshIntervalId);
//     }
//   };
// }, []);

// const AuthContext = createContext<IAuthContextValue | null>({ isLoading: false, isError: false, isAuthenticated: false, user: null });

// us1eEffect(() => {
//   const token = getCookie("token");
//   if (token) {
//     dispatch(isLoginUser());
//   } else {
//     router.push("/login");
//   }
// }, []);

// useEffect(() => {
//   if (router.includes("/login") && isAuthenticated) {
//     router.push("/");
//   }
// }, []);

// export function useAuthContext(): any {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuthContext must be used within a AuthContext.Provider");
//   }
//   return context;
// }
