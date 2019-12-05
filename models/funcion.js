var mongoose = require('mongoose');

var entradaSchema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    sala: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala' },
    dia: { type: String },
    horario: { type: Date },
    entradasVendidas: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Funcion', entradaSchema);