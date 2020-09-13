import React from 'react';
import userAction from './userAction';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin(event) {
        event.preventDefault();
        userAction.login(this.state.email, this.state.password);
    }

    setEmail(email) {
        let newState = {
            email: email,
            password: this.state.password
        }
        this.setState(newState);
    }

    setPassword(password) {
        let newState = {
            email: this.state.email,
            password: password
        }
        this.setState(newState);
    }

    render() {

        return (
            <div className="login-box">
                <h1 className="text-center">Login</h1>
                <div className="textbox">
                    <input type="text" placeholder="Email" id="email" name="" value={this.state.email} onChange={event => this.setEmail(event.target.value)} />
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password" id="password" name="" value={this.state.password} onChange={event => this.setPassword(event.target.value)} />
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-secondary btn-block" onClick={(event) => this.handleLogin(event)}>Submit</button>
                <p className="forgot-password text-center">
                New User? <a href="/login">Register Account</a>
                </p>
                <p className="forgot-password text-center">
                    Forgot <a href="./signup">Password?</a>
                </p>
            </div>
        )
    }
}

export default Login;