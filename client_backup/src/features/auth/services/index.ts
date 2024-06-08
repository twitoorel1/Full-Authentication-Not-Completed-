import { api } from "@/utils/api";
// import { getCookie } from "@/utils/cookies";

export const login = async ([formValue]: any) => {
  try {
    const response = await api.post("/api/auth/login", formValue);
    return response.data;
  } catch (error: any) {
    return Promise.reject(error.response || error.message || "Server Error");
  }
};

export const isLogin = async () => {
  try {
    const response = await api.post("/api/auth/isLogin");
    return response.data;
  } catch (error: any) {
    return Promise.reject(error.response || error.message || "Server Error");
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/api/auth/logout");
    return response.data;
  } catch (error: any) {
    return Promise.reject(error.response || error.message || "Server Error");
  }
};
