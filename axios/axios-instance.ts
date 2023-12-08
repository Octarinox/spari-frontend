import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "https://octarinox.tech/api",
   withCredentials: true,
});

axiosInstance.interceptors.request.use(
   config => {
      let jwtCookie;
      if (typeof window !== "undefined") {
         jwtCookie = localStorage.getItem("jwtToken");
      }
      if (jwtCookie) {
         config.headers["jwt"] = `${jwtCookie}`;
      }
      return config;
   },
   error => {
      return Promise.reject(error);
   }
);

export default axiosInstance;
