const Usuario = require("../models/usuario.js");

class RepositorioUsuario {
  async GetUsuario(id) {
    return Usuario.findOne({
      where: {
        id,
      },
    });
  }

  async GetUsuarioPorEmail(email) {
    return Usuario.findOne({
      where: {
        email,
      },
    });
  }

  async GetUsuarios() {
    return Usuario.findAll();
  }

  async AddUsuario(usuario, isAdmin = false) {
    const senha = await bcrypt.hash(usuario.senha, 10);

    return Usuario.create({ ...usuario, senha, permissao: isAdmin ? 0 : 1 });
  }

  async UpdateUsuario(id, usuario) {
    return Usuario.update(usuario, {
      where: {
        id,
      },
    });
  }

  async DeleteUsuario(id) {
    return Usuario.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = RepositorioUsuario;
