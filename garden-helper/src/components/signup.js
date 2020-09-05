import React from 'react';
import Signup from '/signup';

class Signup extends React.Component {
    render() {
        return (
            <div className="login-box">
                <h1>signup</h1>
                <div className="textbox">
                <input type="text" placeholder="Username" name="" value=""/>
                </div>
                <div className="textbox">
                    <input type="text" placeholder="email" name="" value="" />
                </div>
                <div className="textbox">
                    <input type="text" placeholder="Password" name="" value="" />
                </div>
                <input className="btn" type="button" herf='.signup' name="Sign in" />
            </div>
        )
    }
}
export default Signup