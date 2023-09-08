const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

router.use('/createpost', createPostRoute)

module.exports = router;
