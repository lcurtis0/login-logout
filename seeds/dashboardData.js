const { Dashboard } = require('../models');

const dashboardData = [
  {
    date: 'April 20, 2021 07:00:00',
  },
  {
    date: 'June 22, 2021 09:00:00',
  },
  {

    date: 'September 23, 2021 08:30:00',
  },
  {

    date: 'December 22, 2020 11:00:00',
  },
];

const seedDashboard = () => Dashboard.bulkCreate(dashboardData);

module.exports = seedDashboard;
