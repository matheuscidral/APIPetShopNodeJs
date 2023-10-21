const RepositoryUsuario = require("../repositories/usuarios");

const repositorio = new RepositoryUsuario();

class ServiceUsuario {
  async PegarUmPorEmail(email) {
    if (!email.trim()) {
      throw new Error("Preencha o email");
    }
    return repositorio.PegarUmPorEmail(email);
  }
}

module.exports = ServiceUsuario;
