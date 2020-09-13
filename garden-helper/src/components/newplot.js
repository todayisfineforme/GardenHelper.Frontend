import React from 'react';
import MainNavigation from './mainnavigation';
import gardenAction from './gardenactions';

class NewPlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            garden: '',
            plotName: '',
            length: '',
            width: '',
            sizeunits: '',
            quantity: '',
            plantName: '',
            errorMessage: ''
        }
    }

    setPlotName(plotName) {
        let newState = this.getCopyOfState();
        newState.plotName = plotName;
        this.setState(newState);
    }

    setlength(length) {
        let newState = this.getCopyOfState();
        newState.length = length;
        this.setState(newState);
    }

    setWidth(width) {
        let newState = this.getCopyOfState();
        newState.width = width;
        this.setState(newState);
    }

    setPlantName(plantName) {
        let newState = this.getCopyOfState();
        newState.plantName = plantName;
        this.setState(newState);
    }

    setQuantity(quantity) {
        let newState = this.getCopyOfState();
        newState.quantity = quantity;
        this.setState(newState);
    }

    handleChange(sizeunits) {
        let newState = this.getCopyOfState();
        newState.sizeunits = sizeunits;
        this.setState(newState);
    }

    async componentDidMount() {
        let response = await gardenAction.getGarden();
        let garden = response.data;
        let newState = this.getCopyOfState();
        newState.garden = garden.name;

        this.setState(newState);
    }

    getCopyOfState() {
        return {
            garden: this.state.garden,
            plotName: this.state.plotName,
            plantName: this.state.plantName,
            quantity: this.state.quantity,
            length: this.state.length,
            width: this.state.width,
            sizeunits: this.state.sizeunits
        }
    }


    async handleSubmit(event) {
        event.preventDefault();

        try {
            let plotInfo = {
                plotName: this.state.plotName,
                plantName: this.state.plantName,
                quantity: this.state.quantity,
                length: this.state.length,
                width: this.state.width,
                sizeunits: this.state.sizeunits
            }
            let response = await gardenAction.createNewPlot(plotInfo);
            switch (response.status) {
                case 200:
                    window.location = '/garden/plot/add';
                    break;
                case 500:
                    let newState = this.getCopyOfState();
                    newState.errorMessage = `Unable to save plot`;
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
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body w-50 mx-auto mt-5">
                                <h3 className="card-title">Add a new plot to {this.state.garden} Garden</h3>
                                <form id="signup-form">
                                    <div className="form-group">
                                        <label className="">What shall we call this plot?</label>
                                        <input type="text" id="plotname" className="form-control" value={this.state.plotName} onChange={(e) => this.setPlotName(e.target.value)} />
                                    </div>
                                    <div className="form-group justify-content-center">
                                        <label className="">How large is your plot? </label>
                                        <div className="form-check-inline mx-2">
                                            <input type="text" id="plotLength" name="plotLength" maxLength="5" size="3" value={this.state.length} onChange={(e) => this.setlength(e.target.value)} />

                                            <span className="mx-2">X</span>

                                            <input type="text" id="plotWidth" name="plotWidth" maxLength="5" size="3" value={this.state.width} onChange={(e) => this.setWidth(e.target.value)} />

                                            <div className="input-group mx-2">
                                                <select className="custom-select" id="areaUnits" onChange={(e) => this.handleChange(e.target.value)}>
                                                    <option value="DEFAULT">Units</option>
                                                    <option value="ft">Feet</option>
                                                    <option value="yd">Yards</option>
                                                    <option value="m">Metres</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="">What do you want to plant?</label>
                                        <input type="text" id="plotname" placeholder="Search" className="form-control" value={this.state.plantName} onChange={(e) => this.setPlantName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="">How many do you want to plant?</label>
                                        <input type="text" id="plotname" className="form-control" value={this.state.quantity} onChange={(e) => this.setQuantity(e.target.value)} />
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

export default NewPlot;