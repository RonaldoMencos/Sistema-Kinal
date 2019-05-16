'use strict'

var express = require('express');
var AnimalesController = require('../controllers/animal');

var api= express.Router();

api.post('/guardar-animal',AnimalesController.guardarAnimal);

api.put('/actualizar-persona/:id',AnimalesController.update);

api.delete('/eliminar-persona/:id',AnimalesController.deleting);

api.get('/mostrar-animales', AnimalesController.listarAnimal);

api.post('/buscar-animales', AnimalesController.buscarAnimal);



module.exports = api;