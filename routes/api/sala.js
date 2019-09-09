const mongoose = require('mongoose');
const router = require('express').Router();
var Sala = mongoose.model('Sala');

var Objectid = mongoose.Types.ObjectId;

router.get('/', (req, res, next) => {
    Sala.find({})
        .then((salas) => {
            if (!salas) {
                return res.sendStatus(401);
            }
            return res.json({ 'salas': salas });
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    let sala = new Sala();

    sala.numero = req.body.numero;
    sala.capacidad = req.body.capacidad;

    sala.save()
        .then((sala) => {
            if (sala) {
                res.sendStatus(200);
            }
        })
        .catch(next);
});

router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    Sala.findById(id)
        .then((sala) => {
            if (sala._id.toString() === id.toString()) {
                if (typeof req.body.numero !== 'undefined') {
                    sala.numero = req.body.numero;
                }
                if (typeof req.body.capacidad !== 'undefined') {
                    sala.capacidad = req.body.capacidad;
                }

                sala.save()
                    .then((sala) => {
                        return res.json({ 'sala': sala });
                    }).catch(next);
            } else {
                return res.sendStatus(403);
            }
        });
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Sala.findById(id)
        .then((sala) => {
            if (!sala) {
                return res.sendStatus(401);
            }
            if (sala._id.toString() === id.toString()) {
                return sala.remove()
                    .then(() => {
                        return res.sendStatus(204);
                    });
            } else {
                res.sendStatus(403);
            }
        }).catch(next);
    //res.sendStatus(200);
})
module.exports = router;