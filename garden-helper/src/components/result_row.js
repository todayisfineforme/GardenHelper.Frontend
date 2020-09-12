import React, { Component } from "react";
import result_card from "./result_card"

function result_row() {
    return(
        <div className="row">
          <result_card/>  
          {/* todo logic to determine how many plants to a row */}
        </div>
    );
}

export default result_row;