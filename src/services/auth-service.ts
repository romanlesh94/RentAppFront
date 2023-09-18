import axios from "axios";
import {host} from "../config";

class AuthService {

    login (login: string, password: string) {
        return axios
            .post(`${host}/login`, {login, password})
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                }
            });
    }

    logout () {
        localStorage.removeItem("token");
    }
}

export default new AuthService();