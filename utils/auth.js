const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };

  // withAuth is a function that can be called for login request in the home routes
  




  module.exports = withAuth;
  