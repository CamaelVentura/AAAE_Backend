import { Router } from 'express';

import { index, show, store, update } from './app/controllers/BusController';

const routes = new Router();

routes.post('/cadastro/', store);
routes.post('/onibus/', show);
routes.get('/onibus/', index);
routes.put('/onibus/', update);

export default routes;