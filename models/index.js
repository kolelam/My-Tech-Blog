const User = require('./user');
const Post = require('./post');
const Comments = require('./Comments');

// Define relationships
User.hasMany(Post, {
    foreignKey: 'author_id'
});

Post.belongsTo(User, {
    foreignKey: 'author_id'
});

Post.hasMany(Comments, {
    foreignKey: 'post_id'
});

Comments.belongsTo(Post, {
    foreignKey: 'post_id'
});



module.exports = { User, Post, Comments }