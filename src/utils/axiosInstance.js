import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL?.replace(/\/+$/, ""), // Quita barras duplicadas si las hubiera
  timeout: 60000,
  withCredentials: true, // ✅ IMPORTANTE PARA PRODUCCIÓN
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptores para agregar Token
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Manejo de respuestas
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = "/login";
    } else if (error?.response?.status === 500) {
      console.error("Error del servidor. Intenta nuevamente");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
