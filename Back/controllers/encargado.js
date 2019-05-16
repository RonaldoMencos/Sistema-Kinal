
'use strict'
var Animal = require('../models/animal');
var Encargado = require('../models/encargado');


//#region Guardar
function guardarEncargado(req,res){    
    var params = req.body;
    var animalId = params.animal;
//Campos requeridos    
    if(params.nombre && params.cargo && params.celular ){ 
    
    var nombre = params.nombre;
    var cargo = params.cargo;
    var celular = params.celular;



    Encargado.insertMany({'nombre':nombre,'cargo': cargo, 'celular':celular,'animal':animalId},(err,encargadoGuardado) =>{   
                if(err){
                    res.status(500).send({message: 'Error al guardar el Encargado'});
                }else{
                    if(!encargadoGuardado){
                    res.status(404).send({message: 'No se pudo guardar el Encargado'});
                        }else{
                        res.status(200).send({Encargado: encargadoGuardado});
                            }
                        }
                    });
    }else{
        res.status(200).send({message:'Ingrese todos los campos'});
    }
}
//#endregion


function buscarEncargado(req, res){
    var params = req.body;
    Encargado.find({  $or: [
        {nombre: params.search },
        {cargo: params.search},
        {celular: params.search},
      ]
    }, (err, results)=>{

      results.forEach(function (conta){
     
    
    Encargado.findById(conta._id, (err, resultado)=>{
      
     Animal.find({_id:resultado.animal},(err,animales)=>{
      if(err){
        res.status(404).send({message: 'Error general'})
      }else{
        if(!results){
          res.status(200).send({message: 'No hay registros'});
        }else{
          res.status(200).send({results:results,animales:animales});
        }
      }
    });
  });
  });
});
  }

  function listarEncargado(req,res){    
    Encargado.find({},(err,encargados)=>{   
      console.log(encargados);   
    
      
        if(err){
            res.status(500).send({message: 'No se ha podido listar los animales'});
        }else{
            res.status(200).send({encargados:encargados});
        }
    });
  

}
module.exports ={
    guardarEncargado,
    buscarEncargado,
    listarEncargado
}