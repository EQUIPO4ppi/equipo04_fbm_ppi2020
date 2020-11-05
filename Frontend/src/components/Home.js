import React from 'react';
import '../styles/styles.css'
import logo from '../images/logo.png'
class Home extends React.Component{
    render() {
    return (
        <div className="o"> 
        <main role="main" className="body">
      <center>
        <img src={logo}/>
      </center>   
      <center>
      <button type="button" Name= "boton1" className="btn btn-lg btn-block1 btn-outline-primary">Comienza ya!</button>
      </center>
      <center>
        <p className="Lea">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        </p>
      </center>
      </main>
</div>

    )

}

}
export default Home;