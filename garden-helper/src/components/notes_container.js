import React from 'react';
import AddNoteForm from "./add_note_form";
import NotesTableRow from './notes_table_row';

function NotesContainer(props) {
    const rowLoop = props.notes.length;
    let noteRows = [];
    for (let i=0; i< rowLoop; i++){
        noteRows.push(
            <NotesTableRow
                date={props.notes[i].date}
                watered={props.notes[i].watered}
                fertilized={props.notes[i].fertilized}
                fertilizer_used={props.notes[i].fertilizer_used}
                note={props.notes[i].note}
                key={i}
            />
        )
    }

    return(
        <div className="row">
            <div className="container-fluid">
                <table className="table-striped rounded noteTable">
                    <thead>
                        <tr>
                            <th><h5>Date</h5></th>
                            <th><h5>Watered?</h5></th>
                            <th><h5>Fertilized?</h5></th>
                            <th><h5>Type of Fertilizer used</h5></th>
                            <th><h5>Notes</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {noteRows}
                    </tbody>
                </table>
                <AddNoteForm/>
            </div>
        </div>
    );
}


export default NotesContainer;