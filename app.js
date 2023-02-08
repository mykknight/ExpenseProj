const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: false}));

const Routes = require('./routes/rout');
app.use(Routes); 

// const errorController = require('./Controller/err');
// app.use(errorController.get404);

const sequelize = require('./util/database');

sequelize.sync()
.then((result) => {
    app.listen(4000);
})
.catch(err => console.log(err));


