import React, { Component } from 'react';
import AddNoteForm from "./add_note_form";
import NotesTableRow from './notes_table_row';

class NotesContainer extends Component {

    render(){
        return(
            <div className="row">
                <div className="container-fluid">
                    <table className="table-striped rounded noteTable">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Watered?</th>
                                <th>Fertilized?</th>
                                <th>Type of Fertilizer used</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <NotesTableRow/>
                            {/* todo logic that determines how many rows are written */}
                        </tbody>
                    </table>
                    <AddNoteForm/>
                </div>
            </div>
        );
    }
}

export default NotesContainer;