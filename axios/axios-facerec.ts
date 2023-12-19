import axios from "axios";

const axiosFacerec = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: false,
    headers: {
        'x-api-key': "69a88479-c977-42e0-af61-486eb4cadf1c",
    },
});

export default axiosFacerec;