import React from 'react';
import Login from '/login';

class Login extends React.Component{
    render(){
        return(
            <div className="login-box">
            <h1>Login</h1>
            <div className="textbox">
                <input type="text" placeholder="email" name="" value=""/>
            </div>
            <div className="textbox">
                <input type="text" placeholder="Password" name="" value=""/>
            </div>
                <input className="btn" type="button" name="" value="Sign in"/>
        </div>
        )
    }
}
export default Login