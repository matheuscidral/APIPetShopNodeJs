const RepositoryAtendimento = require("../repositories/atendimento");

const repositorio = new RepositoryAtendimento();

class ServicoAtendimento {
  async GetAtendimento(id) {
    if (id < 0 || isNaN(id)) {
      throw new Error("Favor preencher corretamente o id");
    }

    return repositorio.GetAtendimento(id);
  }

  async GetAtendimentos() {
    return repositorio.GetAtendimentos();
  }

  async AddAtendimento(diahora, valor, idCachorro, concluido) {
    if (diahora == "" || valor == "" || isNaN(idCachorro) || concluido == "") {
      throw new Error("Favor insira todos os campos");
    }
    repositorio.AddAtendimento(diahora, valor, idCachorro, concluido);
  }

  async UpdateAtendimento(id, diahora, valor, concluido) {
    if (diahora == "" || valor == "" || concluido == "") {
      throw new Error("Favor preencher os campos corretamente!");
    } else if (id < 0 || isNaN(id)) {
      throw new Error("Favor preencher corretamente o id");
    }
    repositorio.UpdateAtendimento(id, diahora, valor, concluido);
  }

  async DeleteAtendimento(id) {
    if (id < 0 || isNaN(id) || id > this.GetAtendimentos().length) {
      throw new Error("Favor preencher corretamente o id");
    }
    repositorio.DeleteAtendimento(id);
  }
}

module.exports = ServicoAtendimento;
