import axios from "../axios";

export const RegisterUser = (username, email, password) => {
    return axios.post("register", {
        username,
        email,
        password,
    });
};

export const LoginUser = (username, password) => {
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

export const LogoutUser = () => {
    localStorage.removeItem("user");
};

export const GetCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
