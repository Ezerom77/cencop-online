// 1. Guardar al usuario en la DB (create)
// 2. Buscar al usuario que se quiere loguear por su email (findB)
// 3. Buscar a un usuario por su ID,(findByPk)
// 4. Actualizar un usuario. (update) PENDIENTE
// 5. Eliminar un usuario de la DB.
// 6. Listar todos los usuarios de la DB.(findAll)
// Language: javascript
// Path: src/models/USER.js
// CRUD: Create, Read, Update, Delete

const fs = require("fs");

const User = {
  fileName: "./src/data/users.json",
  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf8"));
  },
  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },
  findAll: function () {
    return this.getData();
  },
  findByPk: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((user) => user.id == id);
    return userFound;
  },
  findByEmail: function (email) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((user) => user.email == email);
    return userFound;
  },
  findByField: function (field, value) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((user) => user[field] === value);
    return userFound;
  },
  create: function (userData) {
    let allUsers = this.findAll();
    let newUser = {
      id: this.generateId(),
      ...userData,
    };
    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
    return newUser;
  },
  destroy: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter((user) => user.id !== id);
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, " "));
    return true;
  },
};

module.exports = User;