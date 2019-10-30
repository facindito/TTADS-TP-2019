const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const usuarioSchema = new mongoose.Schema({
    usuario: { type: String },
    email: { type: String },
    password: { type: String },
    permisos: { type: String },

}, { timestamps: true });

usuarioSchema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

usuarioSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Usuario', usuarioSchema);