import axios from "axios"

const API_BASE_URL = "http://localhost:8080/api/auth"


class AuthenticationRoutes {
    login(data) {
        return axios.post(`${API_BASE_URL}/login`, data, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
    }
}

export default new AuthenticationRoutes()