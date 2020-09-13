import React, { Component } from 'react';
import PlotRow from './plot_row';

function PlotRowGroup(props){
    console.log(props.plants);
    

    return(
        <PlotRow
            plant={props.plants[0]}
        />
    )
}
export default PlotRowGroup;