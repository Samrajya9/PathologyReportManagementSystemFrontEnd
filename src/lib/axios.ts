import { CONFIG } from "@/constanst/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle global errors here (like logout on 401)
    return Promise.reject(error);
  }
);
export default axiosInstance;
