const router = require('express').Router();

router.use('/api/movies', require('./movie'));

module.exports = router;