import React from 'react';
import '../styles/styles.css'
import logo from '../images/logo.png'
class Login extends React.Component{
    render() {
    return (
      
     <body class="text-center"> 
        <form class="form-signin">
        <img class="mb-4" src={logo} alt width="100" height="100"/>
            <h1 class="h3 mb-3 font-weight-normal">Inicio de sesión</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"/> "recordarme"
            </label>
        </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" href="Card"> Sign in</button>
            <a class="p-2 text-dark" href="Calendario">Calendario</a>
            <p class="mt-5 mb-3 text-muted">© 2017-2020</p>

        </form>
        </body>
        
    )
        }
    }
        export default Login;