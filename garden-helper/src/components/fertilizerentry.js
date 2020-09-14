import React from 'react';
import Moment from 'react-moment';

function FertilizationEntry(props) {
    return (
        <tr>
            <td><Moment date={props.activity.date} format="MM/DD/YYYY hh:mm A" /></td>
            <td>{props.activity.name}</td>
            <td>{props.activity.notes}</td>
        </tr>
    );
}

export default FertilizationEntry;