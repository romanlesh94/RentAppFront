import axios from "axios";
import {host} from "../config";

class AuthService {

    login (login: string, password: string) {
        return axios
            .post(`${host}/login`, {login, password})
            .then(response => {
                console.log(response);
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    if(response.data.id) {
                        localStorage.setItem("id", response.data.id);
                    }
                }
            });
    }

    logout () {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
    }
}

export default new AuthService();