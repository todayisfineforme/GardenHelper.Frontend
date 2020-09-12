import React from 'react';
import search from './search';

class searchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleSearch(event) {
        event.preventDefault();
        search.search(this.state.query);
    }

    setQuery(query) {
        let newState = {
            query: query
        }
        this.setState(newState);
    }

    render() {

        return (
            <div>
            <div className="search-box">
                <div className="textbox">
                    <input type="text" placeholder="search" id="search" name="" value={this.state.query} onChange={event => this.setQuery(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={(event) => this.handleLogin(event)}>Search</button>
            </div>
            </div>
        )
    }
}

export default searchResults;