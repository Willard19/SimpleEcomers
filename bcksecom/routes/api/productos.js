//CRUD COMPLETO CON JSON y MYSQL
const express = require("express");

// crear archivo json
const fs=require("fs");

let router = express.Router();

let productosArray=[];

//escribir en el archivo
const writeToFile =()=>{

fs.writeFileSync('productos.json',JSON.stringify(productosArray));

}
//leer el archivo
const ReadFromFile = () =>{
    try{
    let tmpJsonStr=fs.readFileSync('productos.json');
    productosArray=JSON.parse(tmpJsonStr);
    }
    catch{
        productosArray=[];
    }
}


router.get('/all', (req, res)=>{


    res.status(200).json(productosArray);
});

//obtener uno

router.get('/one/:id',(req,res)=>{
let {id} = req.params;
id=Number(id);

    let products = productosArray.find((o,i)=>{

    return o.id=== id;

    });

    res.status(200).json({products});
});

//ORDEN IMPORTA REQ Y LUEGO RES
router.post('/new',(req,res)=>{
const{sku,name,price}=req.body;
const id=productosArray.length+1;
productosArray.push({id, sku, name, price});
writeToFile();
res.status(200).json({id, sku, name, price});

});


//Actualizar
router.put('/upd/:id',(req,res)=>
{
        //do Something here
        let {id}=req.params;
        id=Number(id);
        let{stock}=req.body;
        stock = Number(stock);
        //Manejo simple de modificiar arreglo
            let modified=false;
            let product = null;

        let newProductosArray=productosArray.map((o,i)=>{
            if(o.id === id){
                modified = true;
                o.stock=stock;
                product = o;

            }
            return o;
        });
        writeToFile();
        productosArray=newProductosArray;
        res.status(405).json({modified,product});
});

//Eliminar
router.delete('/del/:id',(req,res)=>{
let {id} = req.params;
id = Number(id);
let deleted=false;
let product=null;
let newProductosArray = productosArray.find((o,i)=>{
  if( o.id !== id){
        return true;
  }else{
    deleted=true;
    product = o;
    return false;
  }
});
productosArray = newProductosArray;
writeToFile();
res.status(200).json({deleted,product});
});


//cargamos el archivo
ReadFromFile();
module.exports=router;