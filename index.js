const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');




//settings
const app = express();
app.use(cors());
app.set('port', process.env.PORT || 3000);

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/img', express.static(path.resolve('img')));

//Start server
mongoose.connect('mongodb://localhost:27017/movies', (err, res) => {
    if (err) {
        console.log('ERROR : connecting to Database. ' + err);
    }
});
//models
require('./models/movie.js');
require('./models/sala.js');
require('./models/usuario.js');

//server
app.listen(app.get('port'), () => {
    console.log(`Server running on http://localhost:${app.get('port')}`);
});

//routes
app.use(require('./routes'));