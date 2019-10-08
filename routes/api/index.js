var router = require('express').Router();


router.use('/movies', require('./movie'));
router.use('/salas', require('./sala'));
router.use('/usuarios', require('./usuario'));


module.exports = router;