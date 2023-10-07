const ServicoCliente = require("../services/cliente");

const servico = new ServicoCliente();

class ControllerCliente {
  async GetCliente(req, res) {
    try {
      const result = await servico.GetCliente(req.params.id);

      res.status(200).json({
        nome: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao pegar um nome" });
    }
  }

  async GetClientes(req, res) {
    try {
      const result = await servico.GetClientes();
      res.status(201).json({
        nomes: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao listar nomes" });
    }
  }

  async AddCliente(req, res) {
    try {
      servico.AddCliente(req.body.nome, req.body.telefone);

      res.status(201).json({
        message: "Adicionado com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  async UpdateCliente(req, res) {
    try {
      servico.UpdateCliente(
        req.params.id,
        req.body.nome,
        req.body.telefone
      );

      res.status(200).json({
        message: "Alterado com sucesso",
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao alterar" });
    }
  }

  async DeleteCliente(req, res) {
    try {
      servico.DeleteCliente(req.params.id);
      res.status(200).json({
        message: "Deletado com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao deletar" });
    }
  }
}

module.exports = ControllerCliente;
