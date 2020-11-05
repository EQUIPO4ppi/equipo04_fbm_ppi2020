import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import Card from '../pages/Card'
import Notificacion from '../pages/notificacion'
import Calendario from '../pages/Calendario'
import Login from '../pages/login'
import Sign from '../pages/signin'

const App = () => {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component = {home} />
                <Route path="/Card" component = {Card} />
                <Route path="/Notificaciones" component = {Notificacion} />
                <Route path="/Calendario" component = {Calendario} />
                <Route path="/Login" component = {Login} />
                <Route path="/Sign" component = {Sign} />
               
            </Switch>

        </BrowserRouter>
    )
}
export default App;