import React from 'react';
import gardenAction from './gardenactions';

class PlantSearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plants: []
        }
    }

    async componentDidMount() {
        if (this.props.plantsearch.isSearchRequested) {
            let response = await gardenAction.searchForPlant(this.props.plantsearch.searchterm);
            if (response) {
                let newState = this.getCopyOfState();
                newState.plants = response.data;
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

    isEmpty() {
        return !this.props.plantsearch.isSearchRequested;
    }

    handlePlantItemSelected(event, selectedPlant){
        event.preventDefault();
        this.props.plantsearch.plantSelected(selectedPlant);
    }
    
    render() {
        return (
            <div className="border border-secondary rounded-bottom searchresult">
                {this.state.plants.map((plant, index) => {
                    return (<a key={index} href='/' className="dropdown-item" onClick={(e) => this.handlePlantItemSelected(e, plant)}>{plant.plantName}</a>)
                })}
            </div>
        );
    }
}


export default PlantSearchResults;