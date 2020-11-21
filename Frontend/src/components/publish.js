import React from 'react';
import '../styles/styles.css'
import user from '../images/user.png'
import imagen from '../images/imagen.png'
import calendar from '../images/calendar.png'
import porno from '../images/map.png'
class Publicar extends React.Component{
    render() {
    return (
        <body class="text-center"> 
        <form class="form-signin">
        <img class="mb-4" src={user} alt width="100" height="100"/>
            <h1 class="h3 mb-3 font-weight-normal">Mateo Maricas</h1>
            <textarea class="form-control" rows="3" placeholder="¿tienes algún evento en mente?" ></textarea>
            <strong class="d-block text-gray-dark">Inserte fotos / videos del evento</strong>
        <div class="media text-muted pt-3">   
            
            <img class="mb-4" src={imagen} alt width="70" height="70"/>
            
            <input type="file" id="ejemplo_archivo_1"></input> 
         
        </div>    
        <strong class="d-block text-gray-dark">Inserte la fecha del evento</strong>
        <div class="media text-muted pt-3">   
            <img class="mb-4" src={calendar} alt width="70" height="70"/>
            <input type="date" id="start" name="trip-start"
            min="1500-01-01" max="2020-12-31"></input>
        </div>
        <strong class="d-block text-gray-dark">Inserte la ubicación del evento</strong>
        <div class="media text-muted pt-3"> 
        <img class="mb-4" src={porno} alt width="70" height="70"/>
        <input type="text" name="nombredelacaja"></input>
        </div>
            <a href="Card" class="btn btn-lg btn-primary btn-block" type="">Publicar </a>
            <p class="mt-5 mb-3 text-muted">© 2017-2020</p>
            <footer class="mastfoot mt-auto">
          <div class="inner">
              <p>
                "quienes somos"
                <a href="https://getbootstrap.com/">Bootstrap</a>
                ", si"
                <a href="https://twitter.com/mdo">@mdo</a>
                ‎      ‏‏‎
              </p>


      </div>
      
      </footer>

        </form>
        
        </body>
        
    )
}
}
export default Publicar;
