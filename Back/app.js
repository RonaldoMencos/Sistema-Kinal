'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app= express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

var animales_routes = require('./routes/animal');
var encargado_routes = require('./routes/encargado');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/v1',animales_routes);
app.use('/v1',encargado_routes);




module.exports = app;