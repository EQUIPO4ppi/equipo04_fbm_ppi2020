const express = require('express');// declaración
const app = express();//constructor de la clase Express
const routes = require('./routes/routes');//Se definen las otras rutas, Crud
const usuario_habitante = require('./routes/usuarioh');//crud
const prueba = require('./routes/prueba');
const evento = require('./routes/evento');
const calificacion = require('./routes/calificacion');
//const colegios = require('./routes/colegios');//crud
//por modulos(routaProductos, e...)

app.set('port',3000)// 


//middleware
app.use(express.json());

//ajustes
//app.use('/api',routes);// peticiones directas, acciones, callback
app.use('/api/usuario',usuario_habitante);

app.use('/api/evento', evento);
app.use('/api/calificacion', calificacion);


//app.use('api/colegios',colegios)
app.listen(app.get('port'),()=>{
console.log('Servidor corriendo en puerto '+app.get('port'));

});

