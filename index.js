const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));




//Start server
mongoose.connect('mongodb://localhost:27017/movies', (err, res) => {
    if (err) {
        console.log('ERROR : connecting to Database. ' + err);
    }
});
require('./models/movie.js');
app.listen(app.get('port'), () => {
    console.log(`Server running on http://localhost:${app.get('port')}`);
});
//routes
app.use(require('./routes'));