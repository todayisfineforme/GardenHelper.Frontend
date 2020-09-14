import React from "react";
import PlantCard from "./plant_card"

function PlotRow(props) {
    const cardLoop = props.plant.number_planted;
    let rows = [];
    for (let i=0; i< cardLoop; i++){
        rows.push(
            <PlantCard
                img_url={props.plant.img_url}
                common_name={props.plant.common_name}
                id={props.plant.id}
                key={i}
            />
        )
    }

    return(
        <tr>
            {rows}
        </tr>
    );
}
export default PlotRow;
