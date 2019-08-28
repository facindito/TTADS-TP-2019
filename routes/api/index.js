var router = require('express').Router();


router.use('/movies', require('./movie'));
router.use('/salas', require('./sala'));


module.exports = router;