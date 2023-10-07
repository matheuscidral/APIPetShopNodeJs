const Atendimento = require("../models/atendimento.js");
const Cachorro = require("../models/cachorro.js");

class RepositoryAtendimento {
  async GetAtendimento(id) {
    return Atendimento.findOne({
      where: { id }
    });
  }

  async GetAtendimentos() {
    return Atendimento.findAll();
  }

  async AddAtendimento(diahora, valor, idCachorro, concluido) {
    return Atendimento.create({
      diahora,
      valor,
      idCachorro,
      concluido,
    });
  }

  async UpdateAtendimento(id, diahora, valor, concluido) {
    return Atendimento.update(
      {
        diahora,
        valor,
        concluido,
      },
      {
        where: { id },
      }
    );
  }

  async DeleteAtendimento(id) {
    return Atendimento.destroy({
      where: { id },
    });
  }
}

module.exports = RepositoryAtendimento;
