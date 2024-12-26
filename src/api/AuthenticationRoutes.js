import axios from "axios"




class AuthenticationRoutes {
    login(data) {
        return axios.post(`/api/auth/login`, data, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
    }
}

export default new AuthenticationRoutes()