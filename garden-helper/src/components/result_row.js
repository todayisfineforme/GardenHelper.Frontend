import React, { Component } from "react";
import ResultCard from "./result_card"

function ResultRow() {
    return(
        <div className="row">
          <ResultCard/>  
          {/* todo logic to determine how many plants to a row */}
        </div>
    );
}

export default ResultRow;