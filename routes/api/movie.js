const mongoose = require('mongoose');
const router = require('express').Router();
const Movie = mongoose.model('Movie');


var ObjectId = mongoose.Types.ObjectId;

router.get('/', (req, res, next) => {
    Movie.find({})
        .then((movies) => {
            if (!movies) {
                return res.sendStatus(401);
            }
            return res.json({ 'movies': movies })
        })
        .catch(next);
});

router.get('/proximamente', (req, res, next) => {
    Movie.find({ estado: 'P' })
        .then((movies) => {
            if (!movies) {
                return res.sendStatus(401);
            }
            return res.json({ 'movies': movies })
        })
        .catch(next);
});

router.get('/cartelera', (req, res, next) => {
    Movie.find({ estado: 'C' })
        .then((movies) => {
            if (!movies) {
                return res.sendStatus(401);
            }
            return res.json({ 'movies': movies })
        })
        .catch(next);
});

router.get('/search/:titulo', (req, res, next) => {
    var titulo = req.params.titulo;
    var regex = new RegExp(titulo);
    Movie.find({ titulo: regex})
        .then((movies) => {
            if (!movies) {
                return res.sendStatus(401);
            }
            return res.json({ 'movies': movies })
        })
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    Movie.findById(id)
        .then((movie) => {
            if (!movie) {
                return res.sendStatus(401);
            }
            return res.json({ 'movie': movie })
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    let movie = new Movie({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        poster: req.body.poster,
        fechaEstreno: req.body.fechaEstreno,
        tipo: req.body.tipo,
        actores: req.body.actores,
        argumento: req.body.argumento,
        director: req.body.director,
        duracion: req.body.duracion,
        entradasSem: req.body.entradasSem,
        genero: req.body.genero,
        estado: req.body.estado,
    })

    movie.save((err) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200);
    });
});


router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    Movie.findById(id)
        .then((movie) => {
            if (movie._id.toString() === id.toString()) {
                movie.titulo = req.body.titulo;
                movie.descripcion = req.body.descripcion;
                movie.poster = req.body.poster;
                movie.fechaEstreno = req.body.fechaEstreno;
                movie.tipo = req.body.tipo;
                movie.actores = req.body.actores;
                movie.argumento = req.body.argumento;
                movie.director = req.body.director;
                movie.duracion = req.body.duracion;
                movie.entradasSem = req.body.entradasSem;
                movie.genero = req.body.genero;
                movie.estado = req.body.estado;

                movie.save()
                    .then((movie) => {
                        return res.json({ 'movie': movie });
                    }).catch(next);
            } else {
                return res.sendStatus(403);
            }
        });
});


router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Movie.findById(id)
        .then((movie) => {
            if (!movie) {
                return res.sendStatus(401);
            }
            if (movie._id.toString() === id.toString()) {
                return movie.remove()
                    .then(() => {
                        return res.sendStatus(204);
                    });
            } else {
                res.sendStatus(403);
            }
        }).catch(next);
    //res.sendStatus(200);
});



module.exports = router;