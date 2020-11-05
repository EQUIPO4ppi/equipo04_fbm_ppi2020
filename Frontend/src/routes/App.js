import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import Card from '../pages/Card'
<<<<<<< HEAD
import Login from '../pages/login'
=======
import Notificacion from '../pages/notificacion'
import Calendario from '../pages/Calendario'
>>>>>>> 7293ab249fdd97d45563d5e66028e9fce969988b


const App = () => {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component = {home} />
                <Route path="/Card" component = {Card} />
<<<<<<< HEAD
                <Route path="/Login" component = {Login} />
          

=======
                <Route path="/Notificaciones" component = {Notificacion} />
                <Route path="/Calendario" component = {Calendario} />
>>>>>>> 7293ab249fdd97d45563d5e66028e9fce969988b
               
            </Switch>

        </BrowserRouter>
    )
}
export default App;