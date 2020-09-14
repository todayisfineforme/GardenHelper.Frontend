import React from 'react';
import PlotRow from './plot_row';

function PlotRowGroup(props){
    const rowLoop = props.plants.rows
    let rows = [];
    for (let i=0; i< rowLoop; i++){
        rows.push(
            <PlotRow
                plant={props.plants}
                key={i}
            />
        )
    }

    return(
        <tbody>
            {rows}
        </tbody>   
    )
}
export default PlotRowGroup;