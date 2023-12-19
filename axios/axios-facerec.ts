import axios from "axios";

const axiosFacerec = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: false,
    headers: {
        'x-api-key': "287a6bce-7d57-4c1a-ac71-4512f6510854",
    },
});

export default axiosFacerec;