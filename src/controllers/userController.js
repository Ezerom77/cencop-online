const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const usersController = {
  index: (req, res) => {
    res.render("./users/index", { title: "CENCOP Online" });
  },
  registro: (req, res) => {
    res.render("./users/registro", { title: "Registro" });
  },
  created: (req, res) => {
    let userInDb = User.findByEmail(req.body.email);
    if (userInDb) {
      res.send("este usuario ya existe");
    }
    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
    };
    User.create(userToCreate);
    res.send("Te registraste!! esto sigue pendiente");
  },
  pedido: (req, res) => {
    res.render("./users/pedido", { title: "Pedido" });
  },
  login: (req, res) => {
    res.render("./users/login", { title: "Login" });
  },
  logedIn: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);
    if (userToLogin) {
      if (bcryptjs.compareSync(req.body.password, userToLogin.password)) {
        req.session.userLogged = userToLogin;
        res.send("Te logueaste");
      } else {
        res.send("Contraseña incorrecta");
      }
    } else {
      res.send("Usuario no existe");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  }
};

module.exports = usersController;
