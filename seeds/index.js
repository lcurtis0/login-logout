const sequelize = require('../config/connection');
const seedDashboard = require('./dashboardData');
const seedPost = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDashboard();

  await seedPost();

  process.exit(0);
};

seedAll();
