const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    const postData = await Post.findAll ()
    console.log(postData);
    const posts = postData.map(post => post.get({plain:true}))
    res.render('homepage', {posts, logged_in: req.session.logged_in});
})


module.exports = router;