import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://purslsechatback.onrender.com/api",
    withCredentials: true
}) 