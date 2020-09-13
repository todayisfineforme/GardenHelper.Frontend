import React, { Component } from "react";
import ResultCard from "./result_card"
import ResultRow from "./result_row";

class ResultContainer extends Component {
    
    render() {
        <div className="row">
            <div className="col-9">
                <div className="jumbotron jumbotron-fluid m-3 rounded">
                    <hr className="mx-4"/>
                    <div className="container-fluid">
                        <ResultRow/>
                        {/* todo logic to determine how many rows are displayed */}
                        <hr className="mx-4"/>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <ResultCard/>
            </div>
        </div>
    }
}
export default ResultContainer;