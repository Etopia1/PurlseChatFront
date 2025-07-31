import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:1900/api",
    withCredentials: true
}) 