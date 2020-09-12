import React, { Component } from "react";
import plot_row from "./plot_row";
import notes_container from "./notes_container";
import plot_detail_card from "./plot_detail_card"

class plot_container extends Component {
    
    render() {
        return(
            <div className="row">
                <div className="col-9">
                    <div className="jumbotron jumbotron-fluid m-3 rounded">
                        <h1 className="display-3 text-center mt-n5">{this.props.plot_name}</h1>
                        <hr className="mx-4"/>
                        <div className="container-fluid">
                            <table>
                                <tbody>
                                    <plot_row/>
                                </tbody>
                            </table>
                            {/* todo logic to determine how many rows are displayed */}
                            <hr className="mx-4"/>
                            <notes_container/>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <plot_detail_card/>
                </div>
            </div>
        );
    }
}
export default plot_container;