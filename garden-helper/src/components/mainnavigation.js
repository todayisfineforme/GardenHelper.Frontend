import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation(props) {
    return (
        <header className="row">
            <div className="col-md-12 p-0">
                <nav className="navbar navbar-expand-lg navbar-dark mainnav shadow-sm">
                    <a className="navbar-brand" href="/">Garden Book | </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/garden/plots">Gardens<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/garden/new">New Garden<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/garden/plot/add">Add Plot<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/garden/plots">My Plots<span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                        <div className="nav-item active align-self-end">
                            <Link className="nav-link text-white" to="/api/profile/add">Profile<span className="sr-only">(current)</span></Link>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default MainNavigation;