import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:5101/",
    headers:{
        "Content-Type": "application/json"
    },
});

api.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem('token');
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
        const token = localStorage.getItem('token');
        if (token == null || error.response.status === 401) {
            console.log("you are not logged in");
        }
        return Promise.reject(error);
    }
);

export default api;