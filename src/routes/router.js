import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import HelloWorld from '../views/hello-world'
import CustomComponent from '../views/custom-component'
import SplitComponent from '../views/split-component'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HelloWorld} ></Route>
            <Route exact path="/custom-component" component={CustomComponent} ></Route>
            <Route exact path="/split-component" component={SplitComponent} ></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;