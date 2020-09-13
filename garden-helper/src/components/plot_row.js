import React from "react";
import PlantCard from "./plant_card"

function PlotRow(props) {
    console.log(props);
    console.log(props.plant.number_planted);
    const rowLoop = props.plant.number_planted;


    return(
        <tr>
          <PlantCard
            img_url={props.plant.img_url}
            common_name={props.plant.common_name}
            id={props.plant.id}
          />  
          {/* todo logic to determine how many plants to a row */}
        </tr>
    );
}

export default PlotRow;
