import React, { Component } from "react";
import plant_card from "./plant_card"

function plot_row() {
    return(
        <div className="row">
          <plant_card/>  
          {/* todo logic to determine how many plants to a row */}
        </div>
    );
}

export default plot_row;
