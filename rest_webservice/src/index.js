const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routing
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/movies',require('./routes/index'));



//starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
 });

//app.listen(3000)



