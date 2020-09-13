import React from 'react';
import AccountNavigation from './accountnavigation';
import userAccount from './userAccount';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
    }

    setEmail(email) {
        let newState = this.getCopyOfState();
        newState.email = email;
        this.setState(newState);
    }

    setPassword(password) {
        let newState = this.getCopyOfState();
        newState.password = password;
        this.setState(newState);
    }

    getCopyOfState() {
        return {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            errorMessage: this.state.errorMessage
        }
    }


    async handleSubmit(event) {
        event.preventDefault();

        try {
            let response = await userAccount.login(this.state.email, this.state.password);
            sessionStorage.setItem('userid', response.data.userid);
            window.location = '/garden/new';
        } catch (error) {
            let newState = this.getCopyOfState();
            newState.errorMessage = `Somthing went terribly wrong!. It's not your fault. It's us. We're working to resolve it now`;
            this.setState(newState);
        }
    }

    render() {
        return (
            <div className="container-fliud h-100 hero-image hero-image2">
                <AccountNavigation />
                <div className="row h-100">
                    <div className="col-md-4 col-xs-0"></div>
                    <div className="col-md-4 col-xs-12 d-flex justify-content-center">
                        <div className="card logincontainer w-100 overflow-auto d-flex useraccount">
                            <div className="card-body">
                                <h5 className="card-title text-white">Log In</h5>
                                <form id="signup-form">
                                    <div className="form-group">
                                        <label className="text-white">Email</label>
                                        <input type="text" id="email" className="form-control" value={this.state.email} onChange={(e) => this.setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-white">Password</label>
                                        <input type="password" id="password" className="form-control" value={this.state.password} onChange={(e) => this.setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-secondary mt-4 mx-auto w-100" onClick={(e) => this.handleSubmit(e)}>Log in</button>
                                </form>
                                <div className="error my-4 mx-auto">
                                    <span className="text-danger">{this.state.errorMessage}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-0"></div>
                </div>
            </div >
        )
    }
}

export default Login;