var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salaSchema = new Schema({
    numero: { type: String },
    horario: { type: String },
    precio: { type: Number },
    movie: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
}, { timestamps: true });

module.exports = mongoose.model('Sala', salaSchema);