import React from 'react';

function AddNoteForm(props){
    return(
        <div className="container-fluid">
            <div className="jumbotron notesTron">
                <form>
                    <h4 className="mb-4">Add another Entry</h4>
                    <div className="form-row">
                        <div className="form-check-inline">
                            <h5>Date:</h5>
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" name="dateSelect" id="dateToday" value="dateToday" defaultChecked/>
                            <label className="form-check-label" htmlFor="dateToday">
                                today: {props.current_date}
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" name="dateSelect" id="pastDate" value="pastDate"/>
                            <input type="text" className="form-control" id="pastDateInput" placeholder="Past Date"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-check-inline">
                            <h5>Watered?</h5>
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" name="watered" id="wateredYes" value="wateredYes"/>
                            <label className="form-check-label" htmlFor="wateredYes">yes</label>
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" name="watered" id="wateredNo" value="wateredNo"/>
                            <label className="form-check-label" htmlFor="wateredNo">no</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-check-inline">
                            <h5>Fertilized?</h5>
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" name="fertilized" id="fertilizedYes" value="fertilizedYes"/>
                            <label className="form-check-label" htmlFor="fertilizedYes">yes</label>
                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" name="fertilized" id="fertilizedNo" value="fertilizedNo"/>
                            <label className="form-check-label" htmlFor="fertilizedNo">no</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-check-inline">
                            <h5>Notes:</h5>
                        </div>
                        <div className="form-check-inline">
                            <input type="text-area" className="form-control noteField" id="growingNote" placeholder="have notes?"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-check-inline">
                            <button type="button" className="btn btn-secondary addEntry">Add Entry</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNoteForm;