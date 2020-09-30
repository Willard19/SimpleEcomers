var express = require('express');
var router = express.Router();

//Para que necesito el router?
//Es el mecanismo que permite registra rutas y controladores(handler)
//Para el servidor web.

//configurar las turas en router 
//Metodos de registro de ruter son


/**
 * get --- consultas --- select
 * post ---- recursos --- insert
 * put ----- actualizar --- update
 * delete ---- eliminar --- delete
 * 
 * 
 * -----------------------
 * 
 * dos parametros
 * 
 * 1 path: constante (texto) de la ruta  --- toda  ruta debe empezar con /
 * 2 handler function (req, res, next) {}
 *      req: es informacion que se recibe de la peticion
 *      res: es la informacion que se enviara al solicitante
 *      next: es un metodo para llamar a la siguiente promesa en la cola
 * 
 *      MIDDLEWARES
 */
router.get('/version', (req, res)=>{
 let versionOb={
     app:"Simple Ecomerce SECOM API",
     version:"0.0.0.1",
     state:"alpha"
 }
 res.status(200).json(versionOb);

});
