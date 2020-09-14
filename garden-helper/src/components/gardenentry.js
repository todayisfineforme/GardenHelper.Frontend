import React from 'react';

function GardenEntry(props) {
    return (
        <tr>
            <td>{props.garden.number}</td>
            <td>{props.garden.gardenName}</td>
            <td>{props.garden.plotsCount}</td>
            <td>
                <div className='d-flex flex-row justify-content-around'>
                    <button className='btn btn-dark mx-1 my-1 py-0 px-1' onClick={() => tillGarden(props.garden.gardenid)}>Cultivate</button>
                </div>
            </td>
        </tr>
    );
}

function tillGarden(gardenid) {
    sessionStorage.setItem('gardenid', gardenid);
    window.location = '/garden/plots';
}

export default GardenEntry;