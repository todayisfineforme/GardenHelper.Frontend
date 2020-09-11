import React from "react";
import plant_card from "./plant_card"

function plot_row() {
    return(
        <tr>
          <plant_card/>  
          {/* todo logic to determine how many plants to a row */}
        </tr>
    );
}

export default plot_row;
