import React from 'react';

function PlotDetailCard(props){
    const plotWidth=props.plot_size.width;
    const plotLength=props.plot_size.length;
    const plotUnits=props.plot_size.units;
    return(
        <div className="jumbotron jumbotron-fluid m-3 rounded">
            <h3 className="text-center mt-n5">Plot Details</h3>
            <hr className="mx-4"/>
            <div className="container">
                <h5>Location: {props.location}</h5>
                <br/>
                <h5>Size: {plotWidth}x{plotLength} {plotUnits} </h5>
                <br/>
                <h5>Purpose: {props.purpose}</h5>
                <br/>
                <h5>Enviroment: {props.enviroment}</h5>
            </div>   
        </div>
    )
}

export default PlotDetailCard;