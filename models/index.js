const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//1. Foreign Key: user_id relations
//1.1. Post
User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

//1.2. Comment
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});


//2. Foreign Key: post_id relations
Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };
