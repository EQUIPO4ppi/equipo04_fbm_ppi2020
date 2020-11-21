import React from 'react';
import '../styles/styles.css'
import logo from '../images/logo.png'
class Home3 extends React.Component{
    render() {
    return (
        
        <body class="text-center">
          <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main role="main" className="body">
          <img src={logo}/>
          <h1 class="cover-heading">Bienvenidos a "mi barrio"</h1> 
          <p class="lead">
          Es un producto dirigido a los habitantes del barrio Florencia que desean obtener información acerca de los diferentes eventos que se dan por su localidad se llama Mi barrio, y es un aplicativo móvil que permitirá buscar y obtener información acerca de los eventos que se dieron o se darán en un futuro en el barrio Florencia, a diferencia de tener que estar buscando personas que nos brinden información acerca de dichos eventos, nuestro producto le permite a sus usuarios obtener información de forma muy sencilla y rápida, ahorrando tiempo y esfuerzo.
          </p>
          <footer class="mastfoot mt-auto">
          <div class="inner">
              <p>
                "quienes somos"
                <a href="https://getbootstrap.com/">Bootstrap</a>
                ", si"
                <a href="https://twitter.com/mdo">@mdo</a>
              </p>


      </div>
      
      </footer>
     
      </main>
      
      </div>
     
      </body>
     


        


    )

}

}
export default Home3;