'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var encargadoSchema = Schema ({
    nombre:String,
    cargo: String,
    celular: String,
    animal: [{type: Schema.ObjectId ,ref:'Animales'}],

});

module.exports = mongoose.model(
    'Encargado',encargadoSchema,
    );