import axios, {AxiosRequestConfig} from "axios";
import {host} from "../config";

const api = axios.create({
    baseURL: "https://localhost:5101/",
    headers:{
        "Content-Type": "application/json"
    },
});

api.interceptors.request.use(
    (config: any) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {return response},
    (error) => {
        const token = sessionStorage.getItem('token');
        if (error.response.status === 401) {
            console.log("you are not logged in");
            const refreshToken = sessionStorage.getItem('refreshToken');
            const headers = {
                refreshToken: refreshToken,
                'Content-Type': 'application/json',
            }
            axios.get(`${host}/refreshTokenVerification`, {headers})
                .then(response => {
                    if (response.data.authToken) {
                        sessionStorage.setItem("token", response.data.authToken);
                    }
                    if(response.data.refreshToken) {
                        sessionStorage.setItem("refreshToken", response.data.refreshToken);
                    }
                })
                .catch(error => {
                    console.error("Something went wrong", error);
                    window.location.href = '/login';
                })
        }
        return Promise.reject(error);
    }
);

export default api;