import React from "react";

function CreatePlotPlantRow(props){
    return(
        <tr>
            <td>{props.plant_name}</td>
            <td>{props.row_spacing}</td>
            <td>{props.bloom_months}</td>
            <td>{props.max_plants}</td>
            <td>
                <input type="number" id="number_of_rows" width="2" min="1" max={props.max_rows} value={props.current_rows}/>
            </td>
        </tr>
    );
}
export default CreatePlotPlantRow;