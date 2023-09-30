const RepositoryExercicio = require("../repositories/exercicio");

const repositorio = new RepositoryExercicio();

class ServicoExercicio {
  async PegarUm(id) {
    return repositorio.PegarUm(id);
  }

  async PegarTodos() {
    return repositorio.PegarTodos();
  }

  async Add(id, nome, email, senha) {
    if (isNaN(id) || nome == "" || email == "" || senha == "") {
      throw new Error("Favor preencher os dados.");
    }
    repositorio.Add(id, nome, email, senha);
  }

  async Alterar(id, nome, email, senha) {
    if (nome == "" || email == "" || senha == "") {
      throw new Error("Favor preencher o nome.");
    } else if (id < 0 || isNaN(id)) {
      throw new Error("Favor preencher corretamente o id");
    }
    repositorio.Alterar(id, nome, email, senha);
  }

  async Deletar(id) {
    if (id < 0 || isNaN(id) || id > this.PegarTodos().length) {
      throw new Error("Favor preencher corretamente o id");
    }
    repositorio.Deletar(id);
  }
}

module.exports = ServicoExercicio;
