import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import Card from '../pages/Card'
import Login from '../pages/login'


const App = () => {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component = {home} />
                <Route path="/Card" component = {Card} />
                <Route path="/Login" component = {Login} />
          

               
            </Switch>

        </BrowserRouter>
    )
}
export default App;