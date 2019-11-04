const mongoose = require('mongoose');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey';
var Usuario = mongoose.model('Usuario');

//---------------------
//       READ
//---------------------
router.get('/', (req, res, next) => {
    Usuario.find({})
        .then((usuarios) => {
            if (!usuarios) {
                return res.sendStatus(401);
            }
            return res.json({ 'usuarios': usuarios });
        }).catch(next);
});
//---------------------
//       CREAT
//---------------------
router.post('/', (req, res, next) => {
    let usuario = new Usuario({
        usuario: req.body.usuario,
        email: req.body.email,
        password: req.body.password
    });
    usuario.save((err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200);
    }).catch(next);
});
//---------------------
//       UPDATE
//---------------------
router.put('/:id', async(req, res, next) => {
    let id = req.params.id;
    await Usuario.findByIdAndUpdate(id, req.body, (err, usuario) => {
        if (!err) {
            return res.json({ 'usuario': usuario });
        } else { return res.sendStatus(403); }
    }).catch(next);
});
//---------------------
//       DELETE
//---------------------
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;

    Usuario.findByIdAndRemove(id, (err, usuario) => {
        if (!err) {
            return res.json({ 'usuario': usuario });
        } else { return res.sendStatus(403); }
    }).catch(next);
});

/******************************************/
//---------------------
//       REGISTER
//---------------------
router.post('/signup', async(req, res) => {
    let usuario = new Usuario({
        usuario: req.body.usuario,
        email: req.body.email,
        password: req.body.password
    });
    usuario.password = await usuario.encryptPassword(usuario.password);
    await usuario.save((err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200);
    });
    // Create a Token
    const token = jwt.sign({ id: usuario._id }, SECRET_KEY, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
    res.json({ auth: true, token });
});

//---------------------
//       LOGIN
//---------------------
router.post('/signin', async(req, res) => {
    const usuario = await Usuario.findOne({ email: req.body.email })
    if (!usuario) {
        return res.status(404).send("The email doesn't exists")
    }
    const validPassword = await bcrypt.compare(req.body.password, usuario.password);
    if (!validPassword) {
        return res.status(401).send({ auth: false, token: null });
    }
    // Create a Token
    const token = jwt.sign({ id: usuario._id }, SECRET_KEY, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
    res.status(200).json({ auth: true, token });
});

module.exports = router;