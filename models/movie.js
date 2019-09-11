var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    titulo: { type: String },
    tipo: { type: String },
    actores: { type: String },
    argumento: { type: String },
    poster: { type: String },
    director: { type: String },
    duracion: { type: Number },
    fechaEstreno: { type: String },
    entradasSem: { type: Number },
    genero: { type: String },
    estado: { type: String}
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);