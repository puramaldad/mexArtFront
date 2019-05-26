import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home'
import Uikit from './uikit';
const Router = () =>(
    <Switch>
        <Route  exact path='/' component={Home}/>
        <Route path='/uikit' component ={Uikit}/>
    </Switch>
)

export default Router 