const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    const postData = await Post.findAll ()
    console.log(postData);
    const posts = postData.map(post => post.get({plain:true}))
    res.render('homepage', {
        posts, 
        logged_in: req.session.logged_in});
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
    res.render("login")
});


router.get('/dashboard', async (req, res) => {
    try{
    const userData = await User.findByPk (req.session.user_id, {
        attributes: {exclude: ['password']},
        include:[{ model: Post}],
    });
    const user = userData.get({plain:true});
       
    res.render("dashboard", {...user, logged_in: true})
}catch (err) {
    res.status(500).json(err);
}
});


router.get('/post/:id', async (req, res) => {
    try{
    const postData = await Post.findByPk (req.params.id, {
        include:[
        {
          model:User,
        attributes: ['username'],
    },
],
});
    const post = postData.get({plain: true})

    res.render("post", {...post, logged_in: req.session.logged_in
    });
} catch (err) {
    res.status(500).json(err);
}
});


module.exports = router;