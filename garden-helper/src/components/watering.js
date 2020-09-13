import React from 'react';
import MainNavigation from './mainnavigation';
// import gardenAction from './gardenactions';


class Watering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            quantity: '',
            note: ''
        }
    }
    setDate(date){
        let newState = this.getCopyOfState();
        newState.date = date;
        this.setState(newState);
     }

     setQuantity(quantity){
        let newState = this.getCopyOfState();
        newState.quantity = quantity;
        this.setState(newState);
     }
     setNote(note){
        let newState = this.getCopyOfState();
        newState.note = note;
        this.setState(newState);
     }

     getCopyOfState() {
        return {
            date: this.state.date,
            quantity: this.state.quantity,
            note: this.state.note
        }   
    }
    // async handleSubmit(event) {
    //     event.preventDefault();

    //     try {
    //         let response = await gardenAction.createNewWatering(this.state.gardenName);
    //         switch (response.status) {
    //             case 200:
    //                 sessionStorage.setItem('gardenid', response.data.gardenid);
    //                 break;
    //             case 500:
    //                 let newState = this.getCopyOfState();
    //                 newState.errorMessage = `Unable to save watering information`;
    //                 break;
    //             default:
    //                 console.error("Unexpected response status came in. Check out what's going on.");
    //         }
    //     } catch (error) {
    //         let newState = this.getCopyOfState();
    //         newState.errorMessage = `Somthing went terribly wrong!. It's not your fault. It's us. We're working to resolve it now`;
    //         this.setState(newState);
    //     }
    // }

    render() {
        return (
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-100">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-75 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body mx-auto mt-5">
                                <h3 className="card-title">Watering Information</h3>
                                <form id="form">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input type="text" id="fullname" className="form-control" value={this.state.date} onChange={(e) => this.setDate(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <input type="text" id="email" className="form-control" value={this.state.quantity} onChange={(e) => this.setQuantity(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Note</label>
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