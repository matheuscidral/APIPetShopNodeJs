const RepositorioUsuario = require("../repositories/usuario.js");

const repositorio = new RepositorioUsuario();
class ServicoUsuario {
  async GetUsuario(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.");
    }
    return repositorio.GetUsuario(id);
  }

  async GetUsuarioPorEmail(email) {
    if (!email.trim()) {
      throw new Error("Preencha o email");
    }
    return repositorio.GetUsuarioPorEmail(email);
  }

  async GetUsuarios() {
    return repositorio.GetUsuarios();
  }

  async AddUsuario(usuario, isAdmin = false) {
    if (!usuario) {
      throw new Error("Favor preencher o usuario.");
    } else if (!usuario.email) {
      throw new Error("Favor preencher o email.");
    } else if (!usuario.senha) {
      throw new Error("Favor preencher o senha.");
    }

    return repositorio.AddUsuario(usuario, isAdmin);
  }

  async UpdateUsuario(id, usuario) {
    if (!usuario) {
      throw new Error("Favor preencher o usuario.");
    } else if (!usuario.email) {
      throw new Error("Favor preencher o email.");
    } else if (!usuario.senha) {
      throw new Error("Favor preencher o senha.");
    } else if (!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.");
    }

    return repositorio.UpdateUsuario(usuario);
  }

  async DeleteUsuario(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.");
    }

    return repositorio.DeleteUsuario(id);
  }
}
module.exports = ServicoUsuario;
