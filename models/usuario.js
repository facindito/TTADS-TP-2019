var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    permisos: { type: String },

}, { timestamps: true });

module.exports = mongoose.model('usuario', usuarioSchema);