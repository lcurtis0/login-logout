const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createPostRoute = require('./createPostRoutes');

router.use('/users', userRoutes);

router.use('/createpost', createPostRoute)

module.exports = router;
