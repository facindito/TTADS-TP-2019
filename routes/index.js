const router = require('express').Router();

//router.use('/api/movies', require('./movie'));
//router.use('/api/salas', require('./sala'));
router.use('/api', require('./api'));
module.exports = router;