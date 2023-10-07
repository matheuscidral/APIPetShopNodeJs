const ServicoAtendimento = require("../services/atendimento");

const servico = new ServicoAtendimento();

class ControllerAtendimento {
  async GetAtendimento(req, res) {
    try {
      const result = await servico.GetAtendimento(req.params.id);

      res.status(200).json({
        atendimento: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao pegar um atendimento" });
    }
  }

  async GetAtendimentos(req, res) {
    try {
      const result = await servico.GetAtendimentos();
      res.status(201).json({
        atendimentos: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao listar atendimentos" });
    }
  }

  async AddAtendimento(req, res) {
    try {
      servico.AddAtendimento(req.body.diahora, req.body.valor, req.body.idCachorro, req.body.concluido);

      res.status(201).json({
        message: "Adicionado com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  async UpdateAtendimento(req, res) {
    try {
      servico.UpdateAtendimento(
        req.params.id,
        req.body.diahora,
        req.body.valor,
        req.body.concluido,
      );

      res.status(200).json({
        message: "Alterado com sucesso",
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao alterar atendimento" });
    }
  }

  async DeleteAtendimento(req, res) {
    try {
      servico.DeleteAtendimento(req.params.id);
      res.status(200).json({
        message: "Deletado com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao deletar atendimento" });
    }
  }
}

module.exports = ControllerAtendimento;
