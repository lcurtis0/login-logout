const router = require('express').Router();
const { Post } = require('../../models');

// for currrent posts already made 
router.get('/current', async (req, res) => {
    try {
      const postData = await Post.findAll();
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //creates new posts and saves to database

router.post('/write', async (req, res) => {
    try {
        const createPostData = await Post.create(req.body);
        res.status(200).json(createPostData);

        if (!createPostData) {
            res
                .status(400)
                .json({ message: 'Must fill out post to create a post' });
            return;
        }
    } catch (err) {
        res.status(400).json(err);
    }
});




module.exports = router;
