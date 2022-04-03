// Con este Middleware evitamos el form de registro y login si el usuario ya esta logueado

function guestMiddleware(req, res, next) {
  if (req.session.userLogged) {
    res.redirect('/');
  } else {
    next();
  }
}
module.exports = guestMiddleware;