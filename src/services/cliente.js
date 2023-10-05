const RepositoryExercicio = require("../repositories/cliente");

const repositorio = new RepositoryExercicio();

class ServicoExercicio {
  async PegarUm(id) {
    return repositorio.PegarUm(id);
  }

  async PegarTodos() {
    return repositorio.PegarTodos();
  }

  async Add(nome, telefone) {
    if (nome == "" || telefone == "") {
      throw new Error("Favor preencher os dados.");
    }
    repositorio.Add(nome, telefone);
  }

  async Alterar(id, nome, telefone) {
    if (nome == "" || telefone == "" ) {
      throw new Error("Favor preencher o nome.");
    } else if (id < 0 || isNaN(id)) {
      throw new Error("Favor preencher corretamente o id");
    }
    repositorio.Alterar(id, nome, telefone);
  }

  async Deletar(id) {
    if (id < 0 || isNaN(id) || id > this.PegarTodos().length) {
      throw new Error("Favor preencher corretamente o id");
    }
    repositorio.Deletar(id);
  }
}

module.exports = ServicoExercicio;
