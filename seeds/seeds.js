const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const users = await User.bulkCreate(userData)

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await users();

  process.exit(0);
};

seedDatabase();