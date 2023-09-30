const Pessoa = require("../models/exercicio.js");

class RepositoryExercicio {
  async PegarUm(id) {
    return Pessoa.findOne({
      where: { id },
    });
  }

  async PegarTodos() {
    return Pessoa.findAll();
  }

  async Add(id, nome, email, senha) {
    return Pessoa.create({
      id,
      nome,
      email,
      senha,
    });
  }

  async Alterar(id, nome, email, senha) {
    return Pessoa.update(
      {
        nome,
        email,
        senha,
      },
      {
        where: { id },
      }
    );
  }

  async Deletar(id) {
    return Pessoa.destroy({
      where: { id },
    });
  }
}

module.exports = RepositoryExercicio;
