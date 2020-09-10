import React from 'react';

function plant_card(props) {
    return(
        <div className="col">
            <div className="card" href={props.plant_detail}>
                <img src={props.img_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-text text-center">{props.common_name}</h4>
                </div>
            </div>
        </div>
    );
}
export default plant_card;