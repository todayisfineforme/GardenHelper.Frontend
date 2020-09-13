import React from 'react';
import MainNavigation from './mainnavigation';
import gardenAction from './gardenactions';

class NewGarden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gardenName: '',
            errorMessage:''
        }
    }

    setGardenName(gardenName) {
        let newState = this.getCopyOfState();
        newState.gardenName = gardenName;
        this.setState(newState);
    }

    getCopyOfState() {
        return {
            gardenName: this.state.gardenName
        }
    }

    async handleSubmit(event) {
        event.preventDefault();

        try {
            let response = await gardenAction.createNewGarden(this.state.gardenName);
            switch (response.status) {
                case 200:
                    sessionStorage.setItem('gardenid', response.data.gardenid);
                    window.location = '/garden/plot/add';
                    break;
                case 500:
                    let newState = this.getCopyOfState();
                    newState.errorMessage = `Unable to save garden`;
                    break;
                default:
                    console.error("Unexpected response status came in. Check out what's going on.");
            }
        } catch (error) {
            let newState = this.getCopyOfState();
            newState.errorMessage = `Somthing went terribly wrong!. It's not your fault. It's us. We're working to resolve it now`;
            this.setState(newState);
        }
    }

    render() {
        return (
            <div className="container-fliud h-100 mainpagesbackground overflow-auto">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body w-50 mx-auto mt-5">
                                <h3 className="card-title">Start a new Garden</h3>
                                <form id="signup-form">
                                    <div className="form-group">
                                        <label className="">Garden name</label>
                                        <input type="text" id="email" className="form-control" value={this.state.gardenName} onChange={(e) => this.setGardenName(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-dark mt-4 mx-auto w-100" onClick={(e) => this.handleSubmit(e)}>Create</button>
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

export default NewGarden;