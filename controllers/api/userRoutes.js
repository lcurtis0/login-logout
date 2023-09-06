const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


router.put('/signup', async (req, res) => {
  const signupData = await User.update({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  });
  if (!signupData) {
    res
      .status(400)
      .json({ message: 'Did not email or password correctly, please try again' });
    return;
  }

  const validPassword = await userData.checkPassword(req.body.password);

  if (!validPassword) {
    res
      .status(400)
      .json({ message: ' The password you entered does not meet criteria, please try again' });
    return;
  }

  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;

    res.json({ user: userData, message: 'You successfully made an account. Try logging in!' });
  })
})

module.exports = router;
