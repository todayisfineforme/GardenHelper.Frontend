import React from 'react';
import MainNavigation from './mainnavigation';
import gardenAction from './gardenactions';
import PlotEntry from './plotentry';

class Plot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            garden: '',
            plots: []
        }
    }

    async componentDidMount() {
        let response = await gardenAction.getGarden();
        if (response) {
            let garden = response.data;

            let plots = garden.plots;

            let newState = this.getCopyOfState();
            newState.garden = garden.name;
            newState.plots = [];

            for (let i = 0; i < plots.length; i++) {
                let plot = plots[i];
                newState.plots.push({
                    number: i + 1,
                    plotName: plot.name,
                    dimension: `${plot.length} X ${plot.width} ${plot.units}`,
                    plant: plot.plant.plantName,
                    plantImageUrl: plot.plant.imageUrl,
                    plotid: plot._id
                });
            }
            this.setState(newState);
        }
    }

    getCopyOfState() {
        return {
            garden: this.state.garden,
            plots: this.state.plots
        }
    }

    render() {
        return (
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-1 overflow-auto d-flex maincardcontainer">
                            <div className="card-body mx-auto mt-1 plotstablecontainer">
                                <h3 className="card-title">Plots in {this.state.garden} Garden</h3>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col" colSpan='2'>Plant</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Dimension</th>
                                            <th scope="col" className="px-auto">What do you want to do?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.plots.map((plot, index) => {
                                            return <PlotEntry key={index} index={index} plot={plot} />
                                        })}
                                    </tbody>
                                </table>
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

export default Plot;