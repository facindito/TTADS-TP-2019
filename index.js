const express = require('express');
//const bodyParser = require('body-parser'); bodyParser was added back to Express in release 4.16.0
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

//settings
app.use(cors());
app.set('port', process.env.PORT || 3000);

//middleware
//app.use(bodyParser.urlencoded({ extended: false })); 
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));


//Start server
mongoose.connect('mongodb://localhost:27017/movies', (err, res) => {
    if (err) {
        console.log('ERROR : connecting to Database. ' + err);
    }
});

require('./models/movie.js');
require('./models/sala.js');
require('./models/usuario.js');

app.listen(app.get('port'), () => {
    console.log(`Server running on http://localhost:${app.get('port')}`);
});

//routes
app.use(require('./routes'));