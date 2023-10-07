const Cliente = require("../models/cliente.js");

class RepositoryCliente {
  async GetCliente(id) {
    return Cliente.findOne({
      where: { id },
    });
  }

  async GetClientes() {
    return Cliente.findAll();
  }

  async AddCliente(nome, telefone) {
    return Cliente.create({
      nome,
      telefone
    });
  }

  async UpdateCliente(id, nome, telefone) {
    return Cliente.update(
      {
        nome,
        telefone
      },
      {
        where: { id },
      }
    );
  }

  async DeleteCliente(id) {
    return Cliente.destroy({
      where: { id },
    });
  }
}

module.exports = RepositoryCliente;
