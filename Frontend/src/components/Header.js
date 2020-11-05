import React, { Component } from 'react';
class Header extends React.Component{
    render(){ 
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">Mi barrio</h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-dark" href="/">Bienvenida</a>
          <a class="p-2 text-dark" href="Card">Menú principal</a>
          <a class="p-2 text-dark" href="Login">Inicio de sesión</a>
        </nav>
        <a class="btn btn-outline-primary" href="Sign">Registro</a>
      </div>
    )
}
}
export default Header;