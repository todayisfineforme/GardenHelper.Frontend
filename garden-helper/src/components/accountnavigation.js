import React from 'react';
import {NavLink} from 'react-router-dom';

function AccountNavigation(props){
        return(
            <header className="row">
            <div className="col-md-12 d-flex justify-content-end">
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler">
                        <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link active text-light" to="/">Home</NavLink>
                            <NavLink className="nav-item nav-link active text-light" to="/contact">Help</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        )
}

export default AccountNavigation;