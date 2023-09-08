const router = require('express').Router();
const { User, Dashboard, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const dashboardData = await Dashboard.findAll({
        include: [
          {
            model: Post,
            attributes: [
              'name',
              'title',
              'date',
              'description'
                ],
          },
        ],
      })

      const users = dashboardData.map((project) => project.get({ plain: true }));
      res.render('homepage', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
   
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  res.render('login');
});

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/logout');
    return;
  }
  res.render('logout');
})


router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
})


router.get('/dashboard', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    try {
      const dashboardData = await Dashboard.findAll({
        include: [
          {
            model: Post,
            attributes: [
              'id',
              'title',
              'date',
              'name',
              'description',
            ],
          },
        ],
      });
      const dashboard = dashboardData.get({ plain: true });
      res.render('dashboard', { dashboard, loggedIn: req.session.loggedIn });
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  else {
    console.log("Please login")
    res.redirect('/login');
  }
})
module.exports = router;

router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const usersposts = userData.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      usersposts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;



