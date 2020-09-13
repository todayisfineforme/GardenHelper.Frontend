import React from "react"

function CreatePlotForm(props) {
    return (
        <form>
            <div className="form-row justify-content-center">
                <div className="form-check-inline">
                    <h3>How large is your plot?</h3>
                </div>
                <div className="form-check-inline">
                    <input type="text" className="form-control" id="plotLength" name="plotLength" maxLength="5" size="3"/>
                </div>
                <div className="form-check-inline">
                    <h5>X</h5>
                </div>
                <div className="form-check-inline">
                    <input type="text" className="form-control" id="plotWidth" name="plotWidth" maxLength="5" size="3"/>
                </div>
                <div className="form-check-inline">
                    <div className="input-group">
                        <select className="custom-select" id="areaUnits">
                            <option defaultValue>Units</option>
                            <option value="1">Feet</option>
                            <option value="2">Yards</option>
                            <option value="3">Metres</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="form-check-inline">
                    <h3>What do you want to plant?</h3> 
                </div>
                <div className="form-check-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <div className="form-check-inline">
                    <button type="button" className="btn btn-secondary">Look it up!</button>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="form-check-inline">
                    <h3>How many do you want to plant?</h3>
                </div>
                <div className="form-check-inline">
                    <input type="text" className="form-control" id="numberOfPlants" name="numberOfPlants" maxLength="5" size="3"/>
                </div>
            </div>
            <div className="form-row justify-content-center">
                <div className="form-check-inline">
                    <button type="button" className="btn btn-secondary btn-lg btn-block">Add to Plot!</button>
                </div>
            </div>
        </form>
    );
}
export default CreatePlotForm;