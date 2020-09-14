import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Signup from './components/signup';
import Login from './components/login';
import NewGarden from './components/newgarden';
import NewPlot from './components/newplot';
import Plots from './components/plots';
import Watering from './components/watering';
import Fertilizer from './components/fertilizer';
import Plot from './components/plot_container';
import Create from './components/create_plot_container';
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';


export default function App() {
    return (
        <Switch>
            <Route exact path='/' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/garden/new' component={NewGarden} />
            <Route exact path='/garden/plot/add' component={NewPlot} />
            <Route exact path='/garden/plots' component={Plots} />
            <Route exact path='/garden/plot/watering' component={Watering} />
            <Route exact path='/garden/plot/fertilizer' component={Fertilizer} />
            <Route exact path='/plot' component={Plot} />
        </Switch>
    );
}
