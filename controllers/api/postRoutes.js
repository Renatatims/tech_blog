const router = require('express').Router();
const { Post } = require('../../models');

// Creates new post
router.post('/', async (req, res) => {
    try {
      const createNewPost = await Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(createNewPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // Deletes Post by ID
  router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;