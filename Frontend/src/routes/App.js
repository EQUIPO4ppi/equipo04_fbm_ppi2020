import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import Card from '../pages/Card'
import Card2 from '../pages/Cards2'
import Notificacion from '../pages/notificacion'
import Notificacion2 from '../pages/notificacion2'
import Calendario from '../pages/Calendario'
import Calendario2 from '../pages/Calendario2'
import Login from '../pages/login'
import Sign from '../pages/signin'
import Carousel from '../components/Carousel';
import Home2 from '../pages/home2';
import Publicar from '../pages/publish';
import Home3 from '../pages/Home3';
import guardados from '../pages/guardados';
import guardados2 from '../pages/guardados2';


const App = () => {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path="/" component = {home} />
                <Route path="/Card" component = {Card} />
                <Route path="/Card2" component = {Card2} />
                <Route path="/Notificaciones" component = {Notificacion} />
                <Route path="/Notificaciones2" component = {Notificacion2} />
                <Route path="/guardados" component = {guardados} />
                <Route path="/guardados2" component = {guardados2} />
                <Route path="/Calendario" component = {Calendario} />
                <Route path="/Calendario2" component = {Calendario2} />
                <Route path="/Login" component = {Login} />
                <Route path="/Sign" component = {Sign} />
                <Route path="/Carousel" component = {Carousel} />
                <Route path="/Home2" component = {Home2} />
                <Route path="/Home3" component = {Home3} />
                <Route path="/Publicar" component = {Publicar} />
    
           
               
            </Switch>

        </BrowserRouter>
    )
}
export default App;