import React, { Component } from 'react';
class Head extends React.Component{
    render(){ 
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom box-shadow">
        <h5 class="my-01 mr-md-auto font-weight-normal">Mi barrio</h5>
        <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/Home2">Bienvenida</a>
          <a class="p-2 text-dark" href="Card">Menú</a>
          <a class="p-2 text-dark" href="Notificaciones">Notificaciones</a>
          <a class="p-2 text-dark" href="Calendario">Calendario</a>
          <a class="p-2 text-dark" href="guardados">Eventos guardados</a>
        </nav>
        
      </div>

    )
}
}
export default Head;