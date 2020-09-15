import axios from 'axios';
const baseurl = 'https://garden-helper.herokuapp.com';

const userAccount = {
    login: function login(email, password) {

        let url = `${baseurl}/user/signin`;

        return axios.post(url, {
            email: email,
            password: password
        });
    },

    signup: function signUp(username, email, password) {

        let url = `${baseurl}/user/signup`;

        return axios.post(url, {
            username: username,
            email: email,
            password: password
        })
    },

    updateUser: function signUp(name, image, password,email) {

        let url = `${baseurl}/user/userInfo/update`;

        return axios.put(url, {
            name: name,
            image: image,
            password: password,
            email:email
        });
    },
    getUser: () =>{
        let userid = sessionStorage.getItem('userid');
        let url = `${baseurl}/user/userInfo/${userid}`;
        return axios.get(url);
    }
}

export default userAccount;