import React from 'react';
import ResultCard from "./result_card";

class SearchResults extends React.Component {
    render() {
        return (
            <div>
            <div className="search-box">
                <div className="textbox">
                    <input type="text" placeholder="search" id="search" name="" value={this.state.query} onChange={event => this.setQuery(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={(event) => this.handleLogin(event)}>Search</button>
            </div>
                <ResultCard/>
            </div>
        )
    }
}

export default SearchResults;