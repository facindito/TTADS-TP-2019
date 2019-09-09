const mongoose = require('mongoose');
const router = require('express').Router();
var Movie = mongoose.model('Movie');

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

router.post('/', (req, res, next) => {


    let movie = new Movie({
        titulo: req.body.titulo,
        fechaEstreno: req.body.fechaEstreno,
    })
    res.send(`post movie ${movie.titulo} (${movie.fechaEstreno})`);


    movie.save((err, movie) => {
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
                if (typeof req.body.titulo !== 'undefined') {
                    movie.titulo = req.body.titulo;
                }
                if (typeof req.body.year !== 'undefined') {
                    movie.year = req.body.year;
                }

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
})

module.exports = router;