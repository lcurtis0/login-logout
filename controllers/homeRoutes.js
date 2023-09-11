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
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/logout', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('logout');
})


router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
})


router.get('/dashboard', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    //res.redirect('/dashboard');
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

      const dashboard = dashboardData.map(posts => posts.get({ plain: true }));

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



router.get('/dashboard', async (req, res) => {
  try {
    const postData = await Post.findAll();

    const usersposts = postData.map((project) => project.get({ plain: true }));


    console.log(usersposts)
    res.render('dashboard', {
      usersposts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;



