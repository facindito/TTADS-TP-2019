var mongoose = require('mongoose');

var salaSchema = new mongoose.Schema({
    numero: { type: Number },
    capacidad: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Sala', salaSchema);