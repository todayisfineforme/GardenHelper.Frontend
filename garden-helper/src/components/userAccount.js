import axios from 'axios';

const userAccount = {
    login: function login(email, password) {

        let url = "http://127.0.0.1:3009/user/signin";

        return axios.post(url, {
            email: email,
            password: password
        });
    },

    signup: function signUp(username, email, password) {

        let url = "http://127.0.0.1:3009/user/signup";

        return axios.post(url, {
            username: username,
            email: email,
            password: password
        })
    }
}

export default userAccount;