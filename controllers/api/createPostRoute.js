const router = require('express').Router();
const { Post } = require('../../models');


router.get('/current', async (req, res) => {
    try {
      const postData = await Post.findAll();
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

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

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        if (postData) {
            const post = postData.get({ plain: true });
            res.render('post', { post });
        } else {
            res.status(404).json({ message: 'No post found with that id!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
