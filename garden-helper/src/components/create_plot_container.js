import React, { Component } from "react";
import create_plot_form from "./create_plot_form";
import create_plot_plant_table from "./create_plot_plant_table";
import search from './search';

class create_plot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            available_rows: 0,
            current_plants:[],
            search_results = {},
            query = ''
        }
    }

    async handleSearch(event) {
        event.preventDefault();
        this.state.search_results = await search.search(this.state.query);
    }

    setQuery(query) {
        let newState = {
            query: query
        }
        this.setState(newState);
    }
    render(){
        return(
            <div className="row">
                <div className="col">
                    <div className="jumbotron jumbotron-fluid m-3 rounded">
                        <h1 className="display-3 text-center mt-n5">Plan your Plot!</h1>
                        <hr className="mx-4"/>
                        <div className="container">
                            <create_plot_form/>
                        </div>
                        <hr className="mx-4"/>
                        <div className="container">
                            <div className="row justify-content-center">
                                <h4>Currently available vertical rows: {this.state.available_rows}</h4>
                            </div>
                            <create_plot_plant_table  
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default create_plot;