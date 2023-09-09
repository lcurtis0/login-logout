const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
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
  
     