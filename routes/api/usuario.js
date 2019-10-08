const mongoose = require('mongoose');
const router = require('express').Router();
var Usuario = mongoose.model('Usuario');


router.post('/login', (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    Usuario.find({ email: email, password: password})
        .then((usuarios) => {
            if (!usuarios) {
                return res.sendStatus(401);
            }
            return res.json({ 'usuarios': usuarios });
        })
        .catch(next);
});

router.get('/', (req, res, next) => {
    Usuario.find({})
        .then((usuarios) => {
            if (!usuarios) {
                return res.sendStatus(401);
            }
            return res.json({ 'usuarios': usuarios });
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    let usuario = new Usuario({

    email: req.body.email,
    password: req.body.password
    })

    usuario.save((err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200);
    });
});

router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    Usuario.findById(id)
        .then((usuario) => {
            if (usuario._id.toString() === id.toString()) {
                if (typeof req.body.email !== 'undefined') {
                    usuario.email = req.body.email;
                }
                if (typeof req.body.password !== 'undefined') {
                    usuario.password = req.body.password;
                }

                usuario.save()
                    .then((usuario) => {
                        return res.json({ 'usuario': usuario });
                    }).catch(next);
            } else {
                return res.sendStatus(403);
            }
        });
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Usuario.findById(id)
        .then((usuario) => {
            if (!usuario) {
                return res.sendStatus(401);
            }
            if (usuario._id.toString() === id.toString()) {
                return usuario.remove()
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