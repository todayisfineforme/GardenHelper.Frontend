import React from 'react';
import MainNavigation from './mainnavigation';
import userAccount from './userAccount';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            placeholderimage: 'https://via.placeholder.com/100',
            password: null,
            placeholderpassword: '*****************',
            isPasswordDisabled: true,
            isNameDisabled: true,
            isEmailDisabled: true,
            name: "",
            email:""
        }
    }


    async componentDidMount() {
        let response = await userAccount.getUser();
        if (response) {
            let user = response.data;
            if (user) {
                let newState = this.getCopyOfState();
                if (user.image)
                    newState.image = user.image;
                newState.name = user.name;
                this.setState(newState);
            }
        }
    }

    setImage(image) {
        let newState = this.getCopyOfState();
        newState.image = image;
        this.setState(newState);
    }

    setPassword(password) {
        let newState = this.getCopyOfState();
        newState.password = password;
        this.setState(newState);
    }

    setName(name) {
        let newState = this.getCopyOfState();
        newState.name = name;
        this.setState(newState);
    }
    
    setEmail(email) {
        let newState = this.getCopyOfState();
        newState.email = email;
        this.setState(newState);
    }

    getCopyOfState() {
        return {
            image: this.state.image,
            placeholderimage : this.state.placeholderimage,
            name: this.state.name,
             email: this.state.email,
            password: this.state.password,
            isPasswordDisabled: this.state.isPasswordDisabled,
            isNameDisabled: this.state.isNameDisabled,
            placeholderpassword : this.state.placeholderpassword
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        await userAccount.updateUser(this.state.name, this.state.image,this.state.password);
        let newState = this.getCopyOfState();
        newState.isPasswordDisabled = true;
        newState.placeholderpassword = '*************************';
        newState.password = null;
        this.setState(newState);
    }

    handlePasswordEditClicked(event) {
        event.preventDefault();
        let newState = this.getCopyOfState();
        newState.isPasswordDisabled = false;
        newState.placeholderpassword = null;
        this.setState(newState);
    }

    handleNameEditClicked(event) {
        event.preventDefault();
        let newState = this.getCopyOfState();
        newState.isNameDisabled = false;
        this.setState(newState);
    }

    handleEmailEditClicked(event){
        event.preventDefault();
        let newState = this.getCopyOfState();
        newState.isEmailDisabled = false;
        this.setState(newState);
    }

    handleImageSelected(image) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            let newState = this.getCopyOfState();
            newState.image = reader.result;
            this.setState(newState);
        }, false);

        if (image) {
            reader.readAsDataURL(image);
        }
    }

    render() {
        return (
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body w-75 mx-auto mt-5">
                                <div className="d-flex">
                                    <img src={this.state.image || this.state.placeholderimage} alt="profile photo" className="img-thumbnail mx-3 rounded-circle profileimage" />
                                    <div className="w-100">
                                        <h3 className="card-title">Your Profile</h3>
                                        <form>
                                            <div className="input-group mb-3">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" onChange={(e) => this.handleImageSelected(e.target.files[0])} id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                                    <label className="custom-file-label" >upload picture</label>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <input type="password" className="form-control" disabled={this.state.isPasswordDisabled} id="inlineFormInputGroup" value={this.state.password || this.state.placeholderpassword } onChange={(e) => this.setPassword(e.target.value)} />
                                                <div className="input-group-append">
                                                    <button className="btn btn-secondary input-group-button" onClick={(e) => this.handlePasswordEditClicked(e)}>edit</button>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="text-dark">Name</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" disabled={this.state.isNameDisabled} id="inlineFormInputGroup" value={this.state.name} onChange={(e) => this.setName(e.target.value)} />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-secondary input-group-button" onClick={(e) => this.handleNameEditClicked(e)}>edit</button>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="form-group">
                                                <label className="text-dark">email</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" disabled={this.state.isEmailDisabled} id="inlineFormInputGroup" value={this.state.email} onChange={(e) => this.setEmail(e.target.value)} />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-secondary input-group-button" onClick={(e) => this.handleEmailEditClicked(e)}>edit</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-dark mt-4 mx-auto w-100" onClick={(event) => this.handleSubmit(event)}>save</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="error my-4 mx-auto">
                                <span className="text-danger">{this.state.errorMessage}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Profile;