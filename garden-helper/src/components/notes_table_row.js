import React from "react";

function notes_table_row(props) {
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.watered}</td>
            <td>{props.fertilized}</td>
            <td>{props.fertilizer_used}</td>
            <td>{props.note}</td>
        </tr>
    )
}
export default notes_table_row;