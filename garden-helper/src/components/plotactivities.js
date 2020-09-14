import React from 'react';
import MainNavigation from './mainnavigation';
import gardenAction from './gardenactions';
import WateringActivities from './wateringactivities';
import FertilizationActivities from './fertilizeractivities';


class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: null,
            selectedActivity: 'Watering'
        }
    }

    async componentDidMount() {
        let response = await gardenAction.getGarden();
        if (response) {
            let garden = response.data;

            let plot = garden.plots.find(plot => plot._id === this.props.match.params.plotid);
            if (plot) {
                let newState = this.getCopyOfState();
                newState.plot = plot;
                this.setState(newState);
            }
        }
    }

    getCopyOfState() {
        return {
            garden: this.state.garden,
            plots: this.state.plots
        }
    }

    updateSelectedActivity(e) {
        let newState = this.getCopyOfState();
        this.setState(newState);
    }

    handleActivityTypeSelected(selectedActivity) {
        let newState = this.getCopyOfState();
        newState.selectedActivity = selectedActivity;
        this.setState(newState);
    }

    render() {
        return (
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-1 overflow-auto d-flex maincardcontainer">
                            <div className="card-body mx-auto d-flex flex-column plotstablecontainer">
                                <h3 className="card-title">Your activities in {this.state.plot? this.state.plot.name : ''} Plot</h3>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons" onClick={(e) => this.updateSelectedActivity(e)}>
                                    <label className="btn btn-primary active">
                                        <input type="radio" name="options" value="Watering" checked={this.state.selectedActivity === 'Watering'} onChange={(e) => this.handleActivityTypeSelected(e.target.value)} /> Waterings
                                 </label>
                                    <label className="btn btn-dark">
                                        <input type="radio" name="options" value="Fertilizations" checked={this.state.selectedActivity === 'Fertilizations'} onChange={(e) => this.handleActivityTypeSelected(e.target.value)} /> Fertilizations
                                 </label>
                                </div>
                                <div className="mt-5">
                                    {(this.state.selectedActivity === 'Watering' ?
                                        <WateringActivities plot={this.state.plot} /> : <FertilizationActivities plot={this.state.plot} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Activities;