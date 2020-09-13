import React, { Component } from "react";
import PlotRowGroup from "./plot_row_group";
import NotesContainer from "./notes_container";
import PlotDetailCard from "./plot_detail_card"

class PlotContainer extends Component {
    state =  {
        plot:{
            plot_name: "My First Plot",
            plot_location: "Chicago, IL",
            plot_purpose: "Vegetable",
            plot_enviroment: "Outdoor",
            plot_size:{
                length: 10,
                width: 13,
                units: "feet"
            },
            plants:[
                {
                    common_name: "Corn",
                    img_url:"https://bs.floristic.org/image/o/70d678aabeca1e2751d751537e0289fbbfcfbed1",
                    rows: 3,
                    number_planted: 10,
                    id: 193519
                },
                {
                    common_name: "Potatoes",
                    img_url:"https://bs.floristic.org/image/o/https://bs.floristic.org/image/o/95a0197b33f8efe2ea7a0d25f84476415779a4b5",
                    rows: 2,
                    number_planted: 8,
                    id: 182597
                },
                {
                    common_name: "Snakegourd",
                    img_url:"https://bs.floristic.org/image/o/9a8239795fdc9a9486883cc653b834a04345d238",
                    rows: 1,
                    number_planted: 12,
                    id: 189048
                }
            ],
            notes:[
                {
                    date: "08.26.2020",
                    watered: true,
                    fertilized: true,
                    fertilizer_used: "Miracle-Gro",
                    note: "Leaves canoeing, may need wind break"
                },
                {
                    date: "08.28.2020",
                    watered: false,
                    fertilized: false,
                    fertilizer_used: "",
                    note: "wind break installed"
                },
                {
                    date: "08.30.2020",
                    watered: true,
                    fertilized: true,
                    fertilizer_used: "Miracle-Gro",
                    note: "leaves recovered, fruit buds appeared"
                }
            ]
        }
    };


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
                                    <PlotRowGroup
                                        plants={this.state.plot.plants}
                                    />
                                </tbody>
                            </table>
                            {/* todo logic to determine how many rows are displayed */}
                            <hr className="mx-4"/>
                            <NotesContainer/>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <PlotDetailCard/>
                </div>
            </div>
        );
    }
}
export default PlotContainer;