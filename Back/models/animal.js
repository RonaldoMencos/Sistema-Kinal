'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var animalesSchema = Schema ({
    nombre: String,
    tipo: String,
    edad: String,
    nombreCientifico: String
   
});

module.exports = mongoose.model(
    'Animale',animalesSchema,
    );