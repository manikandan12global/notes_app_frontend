// import { getServerSessionDetail } from "@/libs/action";\
"use client"
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    // const session = await getServerSessionDetail();
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      console.log(accessToken, "accessToken");

      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized, redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default api;
