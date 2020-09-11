import React from 'react';

function navbar(props){
    return(
        <nav class="navbar navbar-dark bg-light topline">
            <a class="navbar-brand ml-0" href="#"><h1>Garden Helper</h1></a>
            <a class="navbar-brand mt-2" href="#"><i class="fas fa-seedling float-left mt-2 mr-2"></i><h3>Profile</h3></a>
        </nav>
    )
}

export default navbar