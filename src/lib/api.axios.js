import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://pulsechatback.onrender.com/api",
    withCredentials: true
}) 