const mongoose = require('mongoose');
const router = require('express').Router();
const Sala = mongoose.model('Sala');

//---------------------
//       READ
//---------------------
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
//---------------------
//       CREATE
//---------------------
router.post('/', (req, res, next) => {
    let sala = new Sala({
        numero: req.body.numero,
        capacidad: req.body.capacidad
    });
    sala.save((err) => {
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
    await Sala.findByIdAndUpdate(id, req.body, (err, sala) => {
        if (!err) {
            return res.json({ 'sala': sala });
        } else { return res.sendStatus(403); }
    }).catch(next);
});

//---------------------
//       DELETE
//---------------------
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Sala.findByIdAndRemove(id, (err) => {
        if (!err) {
            return res.sendStatus(204);
        } else { return res.sendStatus(403); }
    }).catch(next);

})

module.exports = router;