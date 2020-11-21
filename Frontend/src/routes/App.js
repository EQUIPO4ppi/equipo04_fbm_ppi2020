import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import Card from '../pages/Card'
import Notificacion from '../pages/notificacion'
import Calendario from '../pages/Calendario'
import Login from '../pages/login'
import Sign from '../pages/signin'
import Carousel from '../components/Carousel';
import Home2 from '../pages/home2';
import guardados from '../pages/guardados';


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
                <Route path="/Carousel" component = {Carousel} />
                <Route path="/Home2" component = {Home2} />
                <Route path="/guardados" component = {guardados}/>
           
               
            </Switch>

        </BrowserRouter>
    )
}
export default App;