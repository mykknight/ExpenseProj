const express = require('express');
const Router = express.Router();

var cors = require('cors');
Router.use(cors());

const Control = require('../Controller/cont');

Router.post('/expense/add', Control.Addex);

Router.get('/expense/get-exp', Control.GetExp);

Router.delete('/expense/dlt-exp/:prodID', Control.DltExp);

Router.put('/expense/edt-exp/:prodID', Control.EdtExp);

module.exports = Router;