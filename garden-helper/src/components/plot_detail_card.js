import React from 'react';

function PlotDetailCard(props){
    return(
        <div className="jumbotron jumbotron-fluid m-3 rounded">
            <h3 className="text-center mt-n5">Plot Details</h3>
            <hr className="mx-4"/>
            <div className="container">
                <h5>Location: {props.location}</h5>
                <br/>
                <h5>Size: {props.plot_size}</h5>
                <br/>
                <h5>Purpose: {props.purpose}</h5>
                <br/>
                <h5>Enviroment: {props.enviroment}</h5>
            </div>   
        </div>
    )
}

export default PlotDetailCard;