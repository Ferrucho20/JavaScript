// el modulo path se encarga de unir directorios
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//CONNECTING DB
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));
    
//ROUTES
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


//SETTINGS
app.set('port', process.env.PORT || 3000);
// indicamos al server donde está el directorio de vistas
app.set('views', path.join(__dirname, 'views'));
// usamo un motor de plantillas o vistas "ejs" 
app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(morgan('dev'));
// el formato de intercambio de datos ex request de "formulario" 
app.use(express.urlencoded({extended: false}));





//STARTING SERVER 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


