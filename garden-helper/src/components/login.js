import React from 'react';
import userAction from './userAction';
import Header from './header';

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
            <div>
                <Header/>
            <div className="login-box">
                <h1>Login</h1>
                <div className="textbox">
                    <input type="text" placeholder="email" id="email" name="" value={this.state.email} onChange={event => this.setEmail(event.target.value)} />
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password" id="password" name="" value={this.state.password} onChange={event => this.setPassword(event.target.value)} />
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={(event) => this.handleLogin(event)}>Submit</button>
                <p className="forgot-password text-left">
                  please  register <a href="/login">sign in?</a>
                </p>
                <p className="forgot-password text-right">
                    Forgot <a href="./signup">password?</a>
                </p>
            </div>
            </div>
        )
    }
}

export default Login;