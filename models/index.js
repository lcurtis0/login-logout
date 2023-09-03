const User = require('./User');

module.exports = { User };

const Dashboard= require('./Dashboard');
const Post = require('./Post');

Dashboard.hasMany(Post, {
  foreignKey: 'dashboard_id',
});

Post.belongsTo(Dashboard, {
  foreignKey: 'dashboard_id',
});

module.exports = { User, Dashboard , Post};