import axios from "axios";
import {host} from "../config";

class AuthService {

    login (login: string, password: string) {
        return axios
            .post(`${host}/login`, {login, password})
            .then(response => {
                console.log(response);
                if (response.data.authToken) {
                    sessionStorage.setItem("token", response.data.authToken);
                }
                if(response.data.refreshToken) {
                    sessionStorage.setItem("refreshToken", response.data.refreshToken);
                }
                if(response.data.personId) {
                    sessionStorage.setItem("id", response.data.personId);
                }
                if(response.data.role) {
                    sessionStorage.setItem("role", response.data.role);
                }
            });
    }

    logout () {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("refreshToken");
        sessionStorage.removeItem("id");
    }
}

export default new AuthService();