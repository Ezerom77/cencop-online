function authMiddleware(req, res, next) {
  if (req.session.userLogged) {
    return next();
  }
  res.redirect('/users/login');
}

module.exports = authMiddleware;