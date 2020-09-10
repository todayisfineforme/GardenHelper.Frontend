import React from "react";

function notes_table_row(props) {
    render(
        <tr>
            <th>{props.date}</th>
            <td>{props.watered}</td>
            <td>{props.fertilized}</td>
            <td>{props.fertilizer_used}</td>
            <td>{props.note}</td>
        </tr>
    )
}
export default notes_table_row;