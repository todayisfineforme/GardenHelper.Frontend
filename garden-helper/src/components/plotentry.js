import React from 'react';
import { Redirect } from 'react-router-dom';

class PlotEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    redirectTo(path){
        this.setState({
            redirect:true,
            redirectpath:path
        });
    }

    render() {
        return this.state.redirect ? <Redirect to={this.state.redirectpath} /> : (
            <tr>
                <td className="align-middle">{this.props.plot.number}</td>
                <td className="align-middle"><img className="img-thumbnail plantimage" src={this.props.plot.plantImageUrl} /></td>
                <td className="align-middle">{this.props.plot.plant}</td>
                <td className="align-middle">{this.props.plot.plotName}</td>
                <td className="align-middle">{this.props.plot.dimension}</td>
                <td className="align-middle">
                    <div className='d-flex flex-row justify-content-center'>
                        <button className='btn btn-primary mr-1 my-1 btn-sm' onClick={() => this.redirectTo(wateringpath(this.props.plot.plotid))}>Water</button>
                        <button className='btn btn-dark mr-1 my-1 btn-sm' onClick={() => this.redirectTo(fertilizerpath(this.props.plot.plotid))}>Fertilize</button>
                        <button className='btn btn-info mr-1 my-1 btn-sm' onClick={() => this.redirectTo(activitiespath(this.props.plot.plotid))}>Activities</button>
                    </div>
                </td>
            </tr>
        );
    }
}

function wateringpath(plotId) {
    return`/garden/plot/watering/${plotId}`;
}

function fertilizerpath(plotId) {
    return `/garden/plot/fertilizer/${plotId}`;
}

function activitiespath(plotId) {
    return `/garden/plot/activities/${plotId}`;
}

export default PlotEntry;