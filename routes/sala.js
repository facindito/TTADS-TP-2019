const mongoose = require('mongoose');
const router = require('express').Router();
var Sala = mongoose.model('Sala');

router.get('/salas', (req, res, next) => {
    Sala.find({})
        .then((salas) => {
            if (!salas) {
                res.sendStatus(401);
            }
            return res.json({ 'salas': salas });
        })
        .catch(next);
});
module.exports = router;