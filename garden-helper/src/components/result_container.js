import React, { Component } from "react";
import result_card from "./result_card"
import result_row from "./result_row";

class result_container extends Component {
    
    render() {
        <div className="row">
            <div className="col-9">
                <div className="jumbotron jumbotron-fluid m-3 rounded">
                    <hr className="mx-4"/>
                    <div className="container-fluid">
                        <result_row/>
                        {/* todo logic to determine how many rows are displayed */}
                        <hr className="mx-4"/>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <result_card/>
            </div>
        </div>
    }
}
export default result_container;