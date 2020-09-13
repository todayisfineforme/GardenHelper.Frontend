import React from 'react';

function PlantCard(props) {
    return(
        <td>
            <div className="card" href={props.plant_detail}>
                <img src={props.img_url} className="card-img-top" data-id={props.id} alt="..."/>
                <div className="card-body">
                    <p className="card-text text-center">{props.common_name}</p>
                </div>
            </div>
        </td>
    );
}
export default PlantCard;