const express = require('express');
const router = express.Router();

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
const productosRoutes = require('./api/productosdb'); //asi instancio
router.get('/version', (req, res)=>{
 let versionObj={
     app:"Simple Ecomerce SECOM API",
     version:"0.0.0.1",
     state:"alpha"
 }
 res.status(200).json(versionObj); 
});

router.use('/productos', productosRoutes)//para correr todo de la API 



router.get('/param/:edad',(req,res)=>{
    var edad=parseInt(req.params.edad);
    res.status(200).json({"edad":edad});


});//get param



router.post('/new',(req,res)=>
{
//$post datos del formulario http

//let msg= req.body.msg;
let {msg} =req.body; //53 y 54 son lo mismo
res.status(200).json({"mensaje":msg});
    
}); //new post man


//aactualizar
router.put('/update/:id',(req,res)=>{
let{id}=req.params;
id=parseInt(id);
let{edad}=req.body;

res.status(200).json({id,edad});

});


//Borrar
router.delete('/delete/:id', (req,res)=>{
let {id} = req.params;
id = Number(id);

res.status(200).json({id});

});

module.exports = router; //importante agregar 