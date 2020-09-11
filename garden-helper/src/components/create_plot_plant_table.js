import React from "react";
import create_plot_plant_row from "./create_plot_plant_row"

function create_plot_plant_table(props){
    return(
        <table>
            <thead>
                <th>plant in a row</th>
                <th>row spacing</th>
                <th>blooming months</th>
                <th>recommended plants per row</th>
                <th>Number of rows</th>
            </thead>
            <tbody>
                <create_plot_plant_row/>
                {/* todo logic to print out multiple rows */}
            </tbody>
        </table>
    )
}
export default create_plot_plant_table;