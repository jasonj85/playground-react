import axios from "../axios";

const register = (username, email, password) => {
    return axios.post("register", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post("login", {
            username,
            password,
        })
        .then((res) => {
            if (res.data) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }

            return res.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    getCurrentUser,
    logout
};