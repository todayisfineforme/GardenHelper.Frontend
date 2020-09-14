import React from 'react';
import WateringEntry from './wateringentry';

function WateringActivities(props) {
    let activities = [];
    if (props.plot) {
        for (let i = 0; i < props.plot.watering.length; i++) {
            let watering = props.plot.watering[i];
            activities.push({
                number: i + 1,
                date: watering.date,
                quantity: watering.quantity,
                notes: watering.note,
            });
        }
    }

    return (
        <div className='d-flex flex-column'>
            <h5>Your waterings in {props.plot ? props.plot.name : ''}</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity, index) => {
                        return <WateringEntry key={index} index={index} activity={activity} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default WateringActivities;