import React, { Component } from 'react';
import add_note_form from "./add_note_form";
import notes_table_row from './notes_table_row';

class notes_container extends Component {

    render(){
        <div className="row">
            <div className="container-fluid">
                <table className="table-striped rounded">
                    <thead>
                            <th>Date</th>
                            <th>Watered?</th>
                            <th>Fertilized?</th>
                            <th>Type of Fertilizer used</th>
                            <th>Notes</th>
                    </thead>
                    <tbody>
                        <notes_table_row/>
                        {/* todo logic that determines how many rows are written */}
                    </tbody>
                </table>
                <add_note_form/>
            </div>
        </div>
    }
}

export default notes_container;