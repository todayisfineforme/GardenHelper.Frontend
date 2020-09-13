import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Plot from './components/plot_container';
import Create from './components/create_plot_container';
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

export default function App() {
    return (
        // <Header/>
            <Switch>
                <Route exact path='/' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/create' component={Create}/>
                <Route path='/plot' component={Plot}/>
                <Route path='/signup' component={Signup} />
                {/* <Route path='/profile' component={}/> */}
            </Switch>
    );
}
