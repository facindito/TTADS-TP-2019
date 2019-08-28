var mongoose = require('mongoose');

var entradaSchema = new mongoose.Schema({
    movie:{type:mongoose.Schema.Types.ObjectId, ref:'Movie'},
    sala:{type:mongoose.Schema.Types.ObjectId, ref:'Sala'},
    diaSemana: { type : String}, 
    hora_inicio: { type: Date},
    entradasVendidas: {type: Number}
}, { timestamps: true });

module.exports = mongoose.model('funcion', entradaSchema);