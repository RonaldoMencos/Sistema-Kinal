'use strict'

var express = require('express');
var EncargadoController = require('../controllers/encargado');

var api= express.Router();

api.post('/guardar-encargado',EncargadoController.guardarEncargado);

//api.put('/actualizar-persona/:id',EncargadoController.update);

//api.delete('/eliminar-persona/:id',EncargadoController.deleting);

api.post('/buscar-encargado', EncargadoController.buscarEncargado);

api.get('/mostrar-encargado', EncargadoController.listarEncargado);



module.exports = api;