const Usuario = require("../models/usuarios");
const bcrypt = require("bcrypt");

class RepositoryUsuarios {
  async PegarUmPorEmail(email) {
    return Usuario.findOne({
      where: { email },
    });
  }
}

module.exports = RepositoryUsuarios;
