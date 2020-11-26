import React from 'react';
import '../styles/styles.css'
import logo from '../images/logo.png'
class Sign extends React.Component{
    render() {
    return (
      
     <body class="text-center"> 
        <form class="form-signin">
        <img class="mb-4" src={logo} alt width="100" height="100"/>
            <h1 class="h3 mb-3 font-weight-normal">Registro de usuario</h1>
            <p>Ingresa un nombre de usuario</p>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="User name " required autofocus></input>
            <p>Ingresa una contraseña</p>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
            <p>Confirma la contraseña</p>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
            <p>eres coordinador? ingresa tu código de verificación</p>
            <input type="text" class="form-control" id="address2" placeholder="(opcional)"></input>
        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"/> "Acepto los terminos y condiciones"
            </label>
        </div>
            <a href="Login" class="btn btn-lg btn-primary btn-block" type="">Resgistrarse</a>
            <p class="mt-5 mb-3 text-muted">© 2017-2020</p>
            <footer class="mastfoot mt-auto">
          <div class="inner">
              <p>
              Iniciar sesión 
                <a href="login"> Inicio de sesión </a>
              
              </p>


      </div>
      
      </footer>

        </form>
        
        </body>
        
    )
    
        }
        
    }
        export default Sign;