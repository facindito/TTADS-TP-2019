const mongoose = require('mongoose');
const router = require('express').Router();
const Movie = mongoose.model('Movie');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid')
const storage = multer.diskStorage({
    destination: 'img/',
    filename: function(req, file, cb) {
        cb(null, uuid.v4() + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage });


//---------------------
//       READ
//---------------------
router.get('/', (req, res, next) => {
    Movie.find({})
        .then((movies) => {
            if (!movies) {
                return res.sendStatus(401);
            }
            return res.json({ 'movies': movies })
        }).catch(next);
});
//---------------------
//  PROXIMAMENTE
//---------------------
router.get('/proximamente', (req, res, next) => {
    Movie.find({ estado: 'P' })
        .then((movies) => {
            if (!movies) {
                return res.sendStatus(401);
            }
            return res.json({ 'movies': movies })
        }).catch(next);
});
//---------------------
//       CARTELERA
//---------------------
router.get('/cartelera', (req, res, next) => {
    Movie.find().or([{ estado: 'C' }, { estado: 'E' }])
        .then((movies) => {
            if (!movies) {
                return res.sendStatus(401);
            }
            return res.json({ 'movies': movies })
        }).catch(next);
});
//---------------------
//       SEARCH
//---------------------
router.get('/search/:titulo', (req, res, next) => {
    var titulo = req.params.titulo;
    var regex = new RegExp(titulo);
    Movie.find({ titulo: regex })
        .then((movies) => {
            if (!movies) {
                return res.sendStatus(401);
            }
            return res.json({ 'movies': movies })
        })
        .catch(next);
});
//---------------------
//     READ BY ID
//---------------------
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
//---------------------
//       CREATE
//---------------------
router.post('/', upload.single('poster'), (req, res, next) => {

    let movie = new Movie({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        poster: req.file.path,
        fechaEstreno: req.body.fechaEstreno,
        tipo: req.body.tipo,
        actores: req.body.actores,
        argumento: req.body.argumento,
        director: req.body.director,
        duracion: req.body.duracion,
        entradasSem: req.body.entradasSem,
        genero: req.body.genero,
        estado: req.body.estado,
    });
    movie.save((err) => {
        if (err) {
            return res.status(500);
        }
        res.status(200);
    }).catch(next);
});

//---------------------
//       UPDATE
//---------------------
router.put('/:id', upload.single('poster'), async(req, res, next) => {
    let id = req.params.id;
    if (req.body.poster) { req.body.poster = req.file.path }
    await Movie.findByIdAndUpdate(id, req.body, (err, movie) => {
        if (!err) {
            return res.json({ 'movie': movie });
        } else { return res.sendStatus(403); }
    }).catch(next);
});
//---------------------
//       DELETE
//---------------------
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Movie.findByIdAndRemove(id, (err, movie) => {
        if (!err) {
            return res.json({ 'movie': movie });
        } else { return res.sendStatus(403); }
    }).catch(next);
});

module.exports = router;