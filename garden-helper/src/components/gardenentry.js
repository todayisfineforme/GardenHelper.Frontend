import React from 'react';
import { Redirect } from 'react-router-dom';

class GardenEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    tillGarden() {
        sessionStorage.setItem('gardenid', this.props.garden.gardenid);
        this.setState({ redirect: true });
    }

    render() {

        return this.state.redirect ? <Redirect to="/garden/plots" /> : (
            <tr>
                <td>{this.props.garden.number}</td>
                <td>{this.props.garden.gardenName}</td>
                <td>{this.props.garden.plotsCount}</td>
                <td>
                    <div className='d-flex flex-row justify-content-around'>
                        <button className='btn btn-dark mx-1 my-1 py-0 px-1' onClick={() => this.tillGarden()}>Cultivate</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default GardenEntry;