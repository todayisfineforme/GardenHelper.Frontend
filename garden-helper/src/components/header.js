import React from 'react';
import { Link } from 'react-router-dom'


class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand navbar-light bg-light topline">
                <Link to="/" className="navbar-brand ml-0"><h1>Garden Helper</h1></Link>
                <div className="navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="navbar-brand mt-2 mx-4"><h4>Your Garden</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="navbar-brand mt-2 mx-4"><h4>Create a Plot</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="navbar-brand mt-2 mx-4"><h4>Profile</h4></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header