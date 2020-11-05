import React from 'react';
import mondongo from '../images/mondongo.jpg'
import bob from '../images/bob.jpg'
import bro from '../images/bro.jpg'
import kinyon from '../images/kinyon.jpg'
import reposao from '../images/reposao.png'
class Cards extends React.Component{
    render() {
    return (
       
<div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Actividades recreativas</h4>
          </div>
          <div className="card-body">
           
            <img src={bro} class="card-img-top imagen" alt width="520" height="420"/>
            <p>
            Evento en el cual se podrá hacer deporte y socializar al aire libre por medio de juegos e integraciones, se realizará el dia 2 de noviembre del 2020
          </p>
            <button type="button" className="btn btn-lg btn-block1 btn-outline-primary">Me gusta</button>
            <button type="button" className="btn btn-lg btn-block2 btn-outline-primary">Me interesa</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Torneo de League of Legends</h4>
          </div>
          <div className="card-body">
          
           
          <img src={kinyon} class="card-img-top imagen" alt width="520" height="420"/>
          <p>Evento competitivo del videojuego "League of Legends, se escogera entre los 3 mejores y se llevaran un premio de acuerdo a sus logros, se realizara el dia 3 de diciembre del 2020</p>
            <button type="button" className="btn btn-lg btn-block1 btn-outline-primary">Me gusta</button>
            <button type="button" className="btn btn-lg btn-block2 btn-outline-primary">Me interesa</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Torneo de futbol</h4>
            </div>
          <div className="card-body">
          
           
          <img src={reposao} class="card-img-top imagen" alt width="520" height="420"/>
          <p>Evento deportivo de futbol donde varios equipos se enfrentarán para ganarse un bono de 600 mil pesos para gastar en morcilla y mondongo, se realizará el dia 4 de diciembre del 2020
          </p>
            <button type="button" className="btn btn-lg btn-block1 btn-outline-primary">Me gusta</button>
            <button type="button" className="btn btn-lg btn-block2 btn-outline-primary">Me interesa</button>
          </div>
        </div>
       
      
          </div>
      
      
    )

}

}
export default Cards;
