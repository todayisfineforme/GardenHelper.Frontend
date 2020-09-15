import React from 'react';
import MainNavigation from './mainnavigation';
import gardenAction from './gardenactions';
import Moment from 'react-moment';
import { Redirect } from 'react-router-dom';

class Watering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            quantity: '',
            note: '',
            redirect: false
        }
        if (props.match.params.plotid)
            this.state.plotid = props.match.params.plotid
    }

    setQuantity(quantity) {
        let newState = this.getCopyOfState();
        newState.quantity = quantity;
        this.setState(newState);
    }

    setNote(note) {
        let newState = this.getCopyOfState();
        newState.note = note;
        this.setState(newState);
    }

    getCopyOfState() {
        return {
            date: this.state.date,
            quantity: this.state.quantity,
            note: this.state.note,
            plotid: this.state.plotid,
            redirect: this.state.redirect
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        await gardenAction.recordWatering(this.state.plotid, this.state.date, this.state.quantity, this.state.note);
        let newState = this.getCopyOfState();
        newState.redirect = true;
        this.setState(newState);
    }

    render() {
        return this.state.redirect ? <Redirect to="/garden/plots" /> : (
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body w-75 mx-auto mt-5">
                                <h3 className="card-title">Watering Information</h3>
                                <form id="form">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label>Recording watering for</label> <Moment date={this.state.date} format="MM/DD/YYYY hh:mm A" />
                                        </div>
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <input type="text" id="email" className="form-control" value={this.state.quantity} onChange={(e) => this.setQuantity(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Notes</label>
                                            <textarea className="form-control" id="messages" rows="3" value={this.state.note} onChange={(e) => this.setNote(e.target.value)}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-dark mt-4 mx-auto w-100" onClick={(e) => this.handleSubmit(e)}>save</button>
                                    </div>
                                </form>
                            </div>
                            <div className="error my-4 mx-auto">
                                {/* <span className="text-danger">{this.state.errorMessage}</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Watering;