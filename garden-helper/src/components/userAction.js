import axios from 'axios';

const userAction = {
    login: async function login(email, password) {
       
        let url = "http://127.0.0.1:3000/user/signin";
       
        let response = await axios.post(url, {
            email: email,
            password: password
        });

        sessionStorage.setItem('userid', response.userid);
    },

    signup:async function signUp(username, email, password) {

        let url = "http://127.0.0.1:3009/user/signup";

         await axios.post(url, {
            username: username,
            email: email,
            password: password
        })
    }
}

export default userAction;