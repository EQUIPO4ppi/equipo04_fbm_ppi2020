import React, { Component } from 'react';
class Header3 extends React.Component{
    render(){ 
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom box-shadow">
        <h5 class="my-01 mr-md-auto font-weight-normal">Mi barrio</h5>
        <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/Home3">Bienvenida</a>
          <a class="p-2 text-dark" href="Card2">Menú</a>
          <a class="p-2 text-dark" href="Notificaciones2">Notificaciones</a>
          <a class="p-2 text-dark" href="Calendario2">Calendario</a>
          <a class="p-2 text-dark" href="guardados2">Eventos guardados</a>
          <a class="p-2 text-dark" href="Publicar">Crear Eventos</a>
        </nav>
        
      </div>

    )
}
}
export default Header3;