var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: { type: String },
    description: { type: String },
    year: { type: Number },
    poster: { type: String },
    director: { type: String },
    genre: {
        type: String,
        enum: ['Accion', 'Comedia', 'Drama', 'Fantasia', 'Aventura']
    }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);