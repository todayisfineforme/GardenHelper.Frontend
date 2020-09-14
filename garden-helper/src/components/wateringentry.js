import React from 'react';
import Moment from 'react-moment';

function WateringEntry(props) {
    return (
        <tr>
            <td>{props.activity.number}</td>
            <td><Moment date={props.activity.date} format="MM/DD/YYYY hh:mm A" /></td>
            <td>{props.activity.quantity}</td>
            <td>{props.activity.notes}</td>
        </tr>
    );
}

export default WateringEntry;