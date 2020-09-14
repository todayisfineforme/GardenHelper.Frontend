import React from 'react';

function PlotEntry(props) {
    return (
        <tr>
            <td>{props.plot.number}</td>
            <td>{props.plot.plotName}</td>
            <td>{props.plot.dimension}</td>
            <td>{props.plot.plant}</td>
            <td>
                <div className='d-flex flex-row justify-content-around'>
                    <button className='btn btn-dark mx-1 my-1 p-0 w-50' onClick={() => this.getWateringInfo()}>Watering</button>
                    <button className='btn btn-primary mx-1 my-1 p-0 w-50'onClick={() => this.getFertilizerInfo()}>Fertilizer</button>
                </div>
            </td>
        </tr>
    );
}
// function getWateringInfo(){
// window.location='/watering.js';
// }

// function getFertilizerInfo(){
// window.locatin='/fertilizer.js';
// }
export default PlotEntry;