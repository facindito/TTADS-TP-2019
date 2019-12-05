const mongoose = require('mongoose');
const router = require('express').Router();
const Funcion = mongoose.model('Funcion');

//---------------------
//       READ
//---------------------
router.get('/', (res, next) => {
    Funcion.find({})
        .then((funcion) => {
            if (funcion) {
                return res.sendStatus(401);
            }
            return res.json({ 'funcion': funcion })
        }).catch(next);
});

//---------------------
//       CREATE
//---------------------
router.post('/', (req, res, next) => {
    let funcion = new Funcion({
        movie: req.body.movie.map(movie => movie._id) || [],
        sala: req.body.sala.map(sala => sala._id) || [],
        dia: req.body.dia,
        horario: req.body.horario,
        entradasVendidas: req.body.entradasVendidas
    });
    funcion.save((err) => {
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
    await Funcion.findByIdAndUpdate(id, req.body, (err, funcion) => {
        if (!err) {
            return res.json({ 'funcion ': funcion });
        } else { return res.sendStatus(403); }
    }).catch(next);
});

//---------------------
//       DELETE
//---------------------
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Funcion.findByIdAndRemove(id, (err) => {
        if (!err) {
            return res.sendStatus(204);
        } else { return res.sendStatus(403); }
    }).catch(next);

})

module.exports = router;