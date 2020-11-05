import React from 'react';
import '../styles/styles.css'
import logo from '../images/logo.png'
class Home extends React.Component{
    render() {
    return (
        
        <body class="text-center">
          <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main role="main" className="body">
          <img src={logo}/>
          <h1 class="cover-heading">Bienvenidos a "mi barrio"</h1> 
          <p class="lead">
          Una app para que los habitantes del barrio estemos siempre informados
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
export default Home;