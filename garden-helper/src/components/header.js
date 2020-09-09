import React from 'react';


class Header extends React.Component{
    render(){
        return(
            <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-end">
                        <div className="logo">
                           <a href="#">GARDEN BOOK</a>
                       </div>
                    </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="menubar">
                                <ul>
                                    <li className="home"><a href="./index.html">HOME</a></li>
                                    <li className="garden"><a href="#">GARDEN/CROP</a></li>
                                        <div className="submenu">
                                            <ul>
                                                <li><a href="#">New Plot</a></li>
                                                <li><a href="#">Manage Plot</a></li>
                                            </ul>
                                        </div>
                                    <li className="article"><a href="#">ARTICLE</a></li>
                                    <li className="contact"><a href="#">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </header>
        )
    }
}
export default Header