var Animal = require('../models/animal');

//#region Guardar
function guardarAnimal(req,res){    
    var params = req.body;
//Campos requeridos    
    if(params.nombre && params.tipo && params.edad && params.nombreCientifico ){ 
    
    var nombre = params.nombre;
    var tipo = params.tipo;
    var edad = params.edad;
    var nombreCientifico = params.nombreCientifico;


    Animal.insertMany({'nombre':nombre,'tipo': tipo, 'edad':edad,'nombreCientifico':nombreCientifico},(err,animalGuardado) =>{   
                if(err){
                    res.status(500).send({message: 'Error al guardar Animal'});
                }else{
                    if(!animalGuardado){
                    res.status(404).send({message: 'No se pudo guardar el Animal'});
                        }else{
                        res.status(200).send({Animal: animalGuardado});
                            }
                        }
                    });
    }else{
        res.status(200).send({message:'Ingrese todos los campos'});
    }
}
//#endregion

//#region Actualizar
function update(req,res){
        var params = req.body
        var personId = req.params.id;
        var name = params.name;
        var lastname = params.lastname;
        var surname = params.surname;
        var secondsurname = params.secondsurname;
        var marriedsurname = params.marriedsurname;
        var birth = params.birth;
        var religion = params.religion;
        var email = params.email;
        var gender = params.gender;
        var department = params.department;
        var municipality = params.municipality;
        var zone = params.zone;
        var residential = params.residential;
        var avenue = params.avenue;
        var street = params.street;
        var sector = params.sector;
        var number = params.number;
        var cellphone = params.cellphone;
        var house = params.house;
        var other = params.other;
        
        Person.updateMany({_id:personId},{$set: {'Name':name,'Lastname': lastname, 'Surname':surname,'SecondSurname':secondsurname, 'MarriedSurname':marriedsurname,   
        'Birth':birth, 'Religion': religion, 'Email':email,'Gender':gender,'Address.Department':department, 'Address.Municipality':municipality, 'Address.Zone':zone,
        'Address.Residential': residential, 'Address.Avenue': avenue, 'Address.Street':street, 'Address.Sector': sector, 'Address.Number':number,'Phones.Cellphone':cellphone,'Phones.House':house,'Phones.Other':other} }, {New:true},(err,personUpdated)=>{
            
                if(err){
                    res.status(500).send({message: 'Error al actualizar la persona'}); 
                }else{
                    if(!personUpdated){
                        res.status(404).send({message: 'No se pudo actualizar la persona'});
                    }else{
                        
                        res.status(200).send({PersonaActualizada: personUpdated});
                    }
                }
            });
       
 }
 //#endregion

 //#region Eliminar
function deleting(req,res){
    var personId = req.params.id;

        Person.findByIdAndDelete(personId,(err,personDeleted)=> {
            if(err){
                res.status(404).send({message: 'Error al eliminar la Persona'});
            }else{
                if(!personDeleted){
                    res.status(404).send({message: 'No se pudo eliminar la Persona'});
                }else{
                    
                    res.status(200).send({Persona:personDeleted, message:'Se a eliminado la persona'});
                }
            }
        });    
}
//#endregion

//#region Listar
function listarAnimal(req,res){    
    Animal.find({},(err,animales)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido listar los animales'});
        }else{
            res.status(200).send({animales});
        }
    });

}


function buscarAnimal(req, res){
    var params = req.body;
    Animal.find({
      $or: [
        {nombre: params.search },
        {tipo: params.search},
        {edad: params.search},
        {nombreCientifico: params.search}
      ]
    }, (err, animales)=>{
      if(err){
        res.status(404).send({message: 'Error general'})
      }else{
        if(!animales){
          res.status(200).send({message: 'No hay registros'});
        }else{
          res.status(200).send({animales});
        }
      }
    });
  }
//#endregion

module.exports ={
 guardarAnimal,
 update,
 deleting,
 listarAnimal,
 buscarAnimal
}