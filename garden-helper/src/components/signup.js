import React from 'react';
import userAction from './userAction';
import Header from './header';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        await userAction.signup(this.state.username, this.state.email, this.state.password);
         window.location ='/login';
        //navigate to login here
    }
    
    setUsername(username) {
        let newState = {
            username: username,
            password: this.state.password
        }
        this.setState(newState);
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
                <h1>signup</h1>
                <div className="textbox">
                    <input type="text" placeholder="Username" id='username' name="" value={this.state.username} onChange={event => this.setUsername(event.target.value)} />
                </div>
                <div className="textbox">
                    <input type="text" placeholder="email" name="" id='email' value={this.state.email} onChange={event => this.setEmail(event.target.value)} />
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password" name="" id='password' value={this.state.password} onChange={event => this.setPassword(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={(event) => this.handleSubmit(event)}>submit</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </div>
            </div>
        )
    }
}
export default Signup