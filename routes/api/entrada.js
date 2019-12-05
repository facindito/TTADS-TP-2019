const mongoose = require('mongoose');
const router = require('express').Router();
const Entrada = mongoose.model('Entrada');

//---------------------
//       READ
//---------------------
router.get('/', (res, next) => {
    Entrada.find({})
        .then((entradas) => {
            if (!entradas) {
                return res.sendStatus(401);
            }
            return res.json({ 'entradas': entradas });
        })
        .catch(next);
});

//---------------------
//       CREATE
//---------------------
router.post('/', (req, res, next) => {
    let entrada = new Entrada({
        movie: req.body.movie.map(movie => movie._id) || [],
        sala: req.body.sala.map(sala => sala._id) || [],
        precio: req.body.precio,
        butaca: req.body.butaca,
        funcion: req.body.sala.map(sala => sala._id) || []
    });
    entrada.save((err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200);
    }).catch(next);
});