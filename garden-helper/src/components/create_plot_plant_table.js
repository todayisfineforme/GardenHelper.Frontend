import React from "react";
import CreatePlotPlantRow from "./create_plot_plant_row"

function CreatePlotPlantTable(props){
    return(
        <table className="noteTable table-striped rounded">
            <thead>
                <tr>
                    <th>plant in a row</th>
                    <th>row spacing</th>
                    <th>blooming months</th>
                    <th>recommended plants per row</th>
                    <th>Number of rows</th>
                </tr>
            </thead>
            <tbody>
                <CreatePlotPlantRow/>
                {/* todo logic to print out multiple rows */}
            </tbody>
        </table>
    )
}
export default CreatePlotPlantTable;