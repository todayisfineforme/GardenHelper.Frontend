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
                    img_url:"https://bs.floristic.org/image/o/95a0197b33f8efe2ea7a0d25f84476415779a4b5",
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
                    watered: "yes",
                    fertilized: "yes",
                    fertilizer_used: "Miracle-Gro",
                    note: "Leaves canoeing, may need wind break"
                },
                {
                    date: "08.28.2020",
                    watered: "no",
                    fertilized: "no",
                    fertilizer_used: "",
                    note: "wind break installed"
                },
                {
                    date: "08.30.2020",
                    watered: "yes",
                    fertilized: "yes",
                    fertilizer_used: "Miracle-Gro",
                    note: "leaves recovered, fruit buds appeared"
                }
            ]
        }
    };


    render() {
        const groupLoop = this.state.plot.plants.length
        let groups = [];
        for (let i=0; i< groupLoop; i++){
            groups.push(
                <PlotRowGroup
                    plants={this.state.plot.plants[i]}
                    key={i}
                />
            )
        }

        return(
            <div className="row">
                <div className="col-9">
                    <div className="jumbotron jumbotron-fluid m-3 rounded">
                        <h2 className="display-4 text-center mt-n5">{this.state.plot.plot_name}</h2>
                        <hr className="mx-4"/>
                        <div className="container-fluid">
                            <table>
                                {groups}
                            </table>
                            <hr className="mx-4"/>
                            <NotesContainer
                                notes={this.state.plot.notes}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <PlotDetailCard
                        location={this.state.plot.plot_location}
                        plot_size={this.state.plot.plot_size}
                        purpose={this.state.plot.plot_purpose}
                        enviroment={this.state.plot.plot_enviroment}
                    />
                </div>
            </div>
        );
    }
}
export default PlotContainer;