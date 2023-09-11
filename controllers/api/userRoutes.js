const router = require('express').Router();
const { User } = require('../../models');


// this segments is for testing user email and password
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

// logout destorys the session so that i must be reentered in order to see information
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// creates session by entering information

router.post('/signup', async (req, res) => {
  const signupData = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name
  });
  if (!signupData) {
    return res.json({ message: 'this is is not a valid sign up' });
  }

  // then saves saves user_id and sets loggedin to true

  req.session.save(() => {
    req.session.user_id = signupData.id;
    req.session.logged_in = true;

    res.json({ user: signupData, message: 'You successfully made an account. Try logging in!' });
  })
})

module.exports = router;
