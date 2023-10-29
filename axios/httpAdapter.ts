import axios from "axios";
import http from "http"; // Node.js built-in HTTP module

const axiosInstance = axios.create({
   httpAgent: new http.Agent({ keepAlive: true }),
});

export default axiosInstance;
