import React from 'react';
import MainNavigation from './mainnavigation';
import gardenAction from './gardenactions';
import GardenEntry from './gardenentry';

class Plot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gardens: []
        }
    }

    async componentDidMount() {
        let response = await gardenAction.getUserGardens();
        if (response) {
            let gardens = response.data;
            if (gardens.length > 0) {
                let newState = this.getCopyOfState();
                newState.gardens = [];

                for (let i = 0; i < gardens.length; i++) {
                    let garden = gardens[i];
                    newState.gardens.push({
                        number: i + 1,
                        gardenName: garden.name,
                        plotsCount: garden.plots.length,
                        gardenid: garden._id
                    });
                }
                this.setState(newState);
            } else {
                window.location='/garden/prompt'
            }
        }
    }

    getCopyOfState() {
        return {
            gardens: []
        }
    }

    render() {
        return (
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body mx-auto mt-5 plotstablecontainer">
                                <h3 className="card-title">Your Gardens</h3>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col" colSpan='2'>Plots</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.gardens.map((garden, index) => {
                                            return <GardenEntry key={index} index={index} garden={garden} />
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