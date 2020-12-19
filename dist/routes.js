"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _BusController = require('./app/controllers/BusController');

const routes = new (0, _express.Router)();

routes.post('/cadastro/', _BusController.store);
routes.post('/onibus/', _BusController.show);
routes.get('/onibus/', _BusController.index);
routes.put('/onibus/', _BusController.update);

exports. default = routes;