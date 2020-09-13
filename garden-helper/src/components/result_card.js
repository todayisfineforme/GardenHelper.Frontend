import React from 'react';

function ResultCard(props) {
    return(
        <div className="row cardRow">
        <div className="card">
            <img id="plantImg" src={prop[i].image_url} className="card-img-top petImg" alt="pet image"/>
            <div className="card-body" id="petResult">
                <h5 className="card-title" id="name">{props[i].common_name}</h5>
                <p id="id" style="display:none;">{props[i].id}</p>
                <p className="card-text">Gender: {response.data.animals[resNum].gender}</p>
            </div>
            <div className="row addBtnDiv"><button data-id={props[i].id} data-photo={props[i].image_url} data-name={props[i].common_name} href="#" class="btn btn-secondary wishBtn">Add to Plot</button></div>
        </div>
        </div>
    );
}
export default ResultCard;