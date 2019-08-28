var mongoose = require('mongoose');

var entradaSchema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    sala: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala' },
    // usuario:{type:mongoose.Schema.Types.ObjectId, ref:'usuario'}, veremos
    precio: { type: Number },
    butaca: { type: String },
    funcion: { type: mongoose.Schema.Types.ObjectId, ref: 'funcion' },
}, { timestamps: true });

module.exports = mongoose.model('entrada', entradaSchema);