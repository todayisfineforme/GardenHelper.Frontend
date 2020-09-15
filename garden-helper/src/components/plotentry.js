import React from 'react';

function PlotEntry(props) {
    return (
        <tr>
            <td className="align-middle">{props.plot.number}</td>
            <td className="align-middle"><image className="img-thumbnail plantimage" src={props.plot.plantImageUrl} /></td>
            <td className="align-middle">{props.plot.plant}</td>
            <td className="align-middle">{props.plot.plotName}</td>
            <td className="align-middle">{props.plot.dimension}</td>
            <td className="align-middle">
                <div className='d-flex flex-row justify-content-center'>
                    <button className='btn btn-primary mr-1 my-1 btn-sm' onClick={() => getWateringInfo(props.plot.plotid)}>Water</button>
                    <button className='btn btn-dark mr-1 my-1 btn-sm' onClick={() => getFertilizerInfo(props.plot.plotid)}>Fertilize</button>
                    <button className='btn btn-info mr-1 my-1 btn-sm' onClick={() => getActivities(props.plot.plotid)}>Activities</button>
                </div>
            </td>
        </tr>
    );
}

function getWateringInfo(plotId) {
    window.location = `/garden/plot/watering/${plotId}`;
}

function getFertilizerInfo(plotId) {
    window.location = `/garden/plot/fertilizer/${plotId}`;
}

function getActivities(plotId) {
    window.location = `/garden/plot/activities/${plotId}`;
}

export default PlotEntry;