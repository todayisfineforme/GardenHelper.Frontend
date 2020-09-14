import React from 'react';
import MainNavigation from './mainnavigation';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            location: '',
            name: ''
        }
    }
    setImage(image) {
        let newState = this.getCopyOfState();
        newState.image = image;
        this.setState(newState);
    }

    setLocation(location) {
        let newState = this.getCopyOfState();
        newState.location = location;
        this.setState(newState);
    }

    setName(name) {
        let newState = this.getCopyOfState();
        newState.name = name;
        this.setState(newState);
    }

    getCopyOfState() {
        return {
            image: this.state.image,
            name: this.state.name,
            location: this.state.location

        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body w-50 mx-auto mt-5">
                                <h3 className="card-title">Add a new plot to {this.state.garden} Garden</h3>
                                <form>
                                    <div className="form-group">
                                        <label className="text-dark">picture</label>
                                        <input type="text" id="fullname" className="form-control" value={this.state.image} onChange={(e) => this.setImage(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark">location</label>
                                        <input type="text" id="email" className="form-control" value={this.state.location} onChange={(e) => this.setLocation(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark">Name</label>
                                        <input type="password" id="password" className="form-control" value={this.state.name} onChange={(e) => this.setName(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-secondary mt-4 mx-auto w-100" onClick={(event) => this.handleSubmit(event)}>save</button>
                                </form>
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