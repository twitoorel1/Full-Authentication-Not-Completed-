import axios, { AxiosInstance } from "axios";
import { getCookie } from "./cookies";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000, // 5 seconds timeout
  headers: {
    "Content-Type": "application/json",
    authorization: getCookie("token"),
  },
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("axios.interceptors.response Refresh Token");
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;

      // Refresh token
      const rfTokenCookie = getCookie("rf_token");
      console.log("rfTokenCookie: ", rfTokenCookie);
      if (!rfTokenCookie) {
        return Promise.reject(error);
      }

      try {
        const response = await api.post("/api/auth/refreshToken");
        const { accessToken, refreshToken } = response.data;
        api.defaults.headers.authorization = accessToken;
        originalRequest.headers.authorization = accessToken;
        originalRequest._retry = true;
        return axios(originalRequest);
      } catch (error: any) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// define types for API response data and error message
interface ApiResponse<T> {
  data: T;
}

interface ApiError {
  error?: boolean;
  message?: string;
  stack?: string;
}

// define a helper function to handle response data
function handleApiResponse<T>(response: ApiResponse<T>) {
  return response.data;
}

// define a helper function to handle error message
function handleApiError(error: ApiError | any) {
  console.error(error.message);
}

export { api, handleApiResponse, handleApiError };
