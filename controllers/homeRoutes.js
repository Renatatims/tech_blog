const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    const postData = await Post.findAll ()
    console.log(postData);
    const posts = postData.map(post => post.get({plain:true}))
    res.render('homepage', {
        posts, 
        logged_in: req.session.logged_in});
})

router.get('/login', async (req, res) => {
    res.render("login")
})


router.get('/dashboard', async (req, res) => {
    const userData = await User.findByPk (req.session.user_id, {include:[{model:Post}]})
    const user = userData.get({plain:true})
    
    res.render("dashboard", {...user})
})


module.exports = router;