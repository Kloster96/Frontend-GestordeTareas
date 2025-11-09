import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL?.replace(/\/+$/, ""), // Quita barras duplicadas si las hubiera
  timeout: 10000,
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
// Manejo de respuestas
axiosInstance.interceptors.response.use(
  (response) => {
    // Forzar HTTPS en URLs de imágenes
    if (typeof response?.data === "object" && response.data !== null) {
      const convertHttpToHttps = (obj) => {
        for (let key in obj) {
          if (typeof obj[key] === "string" && obj[key].startsWith("http://")) {
            obj[key] = obj[key].replace("http://", "https://");
          } else if (typeof obj[key] === "object" && obj[key] !== null) {
            convertHttpToHttps(obj[key]); // Recursivo para listas y objetos anidados
          }
        }
      };
      convertHttpToHttps(response.data);
    }
    return response;
  },
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
