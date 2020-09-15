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
import Gardens from './components/gardens';
import StartGardenPrompt from './components/startgardenprompt';
import Activities from './components/plotactivities';
import Profile from './components/profile';
import Contact from './components/contact';


export default function App() {
    return (
        <Switch>
            <Route exact path='/' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/user/gardens' component={Gardens} />
            <Route exact path='/garden/new' component={NewGarden} />
            <Route exact path='/garden/prompt' component={StartGardenPrompt} />
            <Route exact path='/garden/plot/add' component={NewPlot} />
            <Route exact path='/garden/plots' component={Plots} />
            <Route exact path='/garden/plot/watering/:plotid' component={Watering} />
            <Route exact path='/garden/plot/fertilizer/:plotid' component={Fertilizer} />
            <Route exact path='/garden/plot/activities/:plotid' component={Activities} />
            <Route exact path='/api/profile/add' component={Profile} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    );
}
