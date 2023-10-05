const Cliente = require("../models/cliente.js");

class RepositoryExercicio {
  async PegarUm(id) {
    return Cliente.findOne({
      where: { id },
    });
  }

  async PegarTodos() {
    return Cliente.findAll();
  }

  async Add(nome, telefone) {
    return Cliente.create({
      nome,
      telefone
    });
  }

  async Alterar(id, nome, telefone) {
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

  async Deletar(id) {
    return Cliente.destroy({
      where: { id },
    });
  }
}

module.exports = RepositoryExercicio;
