const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
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
  if (!req.session.logged_in) {
    res.redirect('/signup');
    return;
  }
  res.render('signup');
})


router.get('/dashboard', withAuth, (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  } else {
  res.render('/login');
  }
})
module.exports = router;

router.get('/dashboard', async (req, res) => {
  try{
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'description']],
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

if (req.session.logged_in) {
  res.redirect('/dashboard');
  return;
}
res.render('/dashboard');
