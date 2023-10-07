const RepositoryCliente = require("../repositories/cliente");

const repositorio = new RepositoryCliente();

class ServicoCliente {
  async GetCliente(id) {
    return repositorio.GetCliente(id);
  }

  async GetClientes() {
    return repositorio.GetClientes();
  }

  async AddCliente(nome, telefone) {
    if (nome == "" || telefone == "") {
      throw new Error("Favor preencher os dados.");
    }
    repositorio.AddCliente(nome, telefone);
  }

  async UpdateCliente(id, nome, telefone) {
    if (nome == "" || telefone == "" ) {
      throw new Error("Favor preencher o nome.");
    } else if (id < 0 || isNaN(id)) {
      throw new Error("Favor preencher corretamente o id");
    }
    repositorio.UpdateCliente(id, nome, telefone);
  }

  async DeleteCliente(id) {
    if (id < 0 || isNaN(id) || id > this.GetClientes().length) {
      throw new Error("Favor preencher corretamente o id");
    }
    repositorio.DeleteCliente(id);
  }
}

module.exports = ServicoCliente;
