import React from 'react';
import AccountNavigation from './accountnavigation';
import userAccount from './userAccount';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            validationError: ''
        }
    }

    setUsername(username) {
        let newState = this.getCopyOfState();
        newState.username = username;
        this.setState(newState);
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
            validationError: this.state.validationError
        }
    }

    setConfirmPassword(password) {
        let newState = this.getCopyOfState();
        newState.confirmPassword = password;

        this.setState(newState);
    }

    async handleSubmit(event) {
        event.preventDefault();

        let errors = this.validateInputs();

        if (errors.length > 0) {
            let newState = this.getCopyOfState();
            newState.validationError = errors[0];
            this.setState(newState);
        } else {
            try {
                await userAccount.signup(this.state.username, this.state.email, this.state.password);
                window.location = '/login';
            } catch (error) {
                let newState = this.getCopyOfState();
                newState.validationError = `Somthing went terribly wrong!. It's not your fault. It's us. We're working to resolve it now`;
                this.setState(newState);
            }
        }
    }

    validateInputs() {
        let errors = [];

        if (this.state.confirmPassword !== this.state.password)
            errors.push("Passwords do not match");

        //add other validations like email validation

        return errors;
    }

    render() {
        return (
            <div className="container-fliud h-100 hero-image hero-image2">
                <AccountNavigation />
                <div className="row h-100">
                    <div className="col-md-4 col-xs-0"></div>
                    <div className="col-md-4 col-xs-12 d-flex justify-content-center">
                        <div className="card h-75 w-100 overflow-auto d-flex useraccount">
                            <div className="card-body">
                                <h5 className="card-title text-white">Create a new account</h5>
                                <form id="signup-form">
                                    <div className="form-group">
                                        <label className="text-white">Name</label>
                                        <input type="text" id="fullname" className="form-control" value={this.state.name} onChange={(e) => this.setUsername(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-white">Email</label>
                                        <input type="text" id="email" className="form-control" value={this.state.email} onChange={(e) => this.setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-white">Password</label>
                                        <input type="password" id="password" className="form-control" value={this.state.password} onChange={(e) => this.setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-white">Confirm Password</label>
                                        <input type="password" id="confirmpassword" className="form-control" value={this.state.confirmPassword} onChange={(e) => this.setConfirmPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-secondary mt-4 mx-auto w-100" onClick={(event) => this.handleSubmit(event)}>Sign up</button>
                                </form>
                            </div>
                            <div className="error my-4 mx-auto">
                                <span className="text-danger">{this.state.validationError}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-0"></div>
                </div>
            </div >
        )
    }
}

export default Signup;