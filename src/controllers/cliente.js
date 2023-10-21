const ServiceCliente = require("../services/clientes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

const servico = new ServiceCliente();

class ControllerCliente {
  async PegarUm(req, res) {
    try {
      const result = await servico.PegarUm(req.params.id);

      res.status(200).json({
        dados: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao pegar um nome " });
    }
  }

  async PegarTodos(req, res) {
    try {
      const result = await servico.PegarTodos();

      res.status(200).json({
        nome: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar nomes " });
    }
  }

  async PegarCachorros(req, res) {
    try {
      const result = await servico.PegarCachorros(req.params.dono);

      res.status(200).json({
        dados: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao encontrar cachorros " });
    }
  }

  async Add(req, res) {
    try {
      servico.Add(req.body.nome, req.body.telefone);

      res.status(201).json({
        message: "Adicionado com sucesso",
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao adicionar cliente" });
    }
  }

  async Update(req, res) {
    try {
      servico.Update(req.params.id, req.body.nome, req.body.telefone);

      res.status(200).json({
        message: "Alterado com sucesso",
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao alterar" });
    }
  }

  async Delete(req, res) {
    try {
      servico.Delete(req.params.id);
      res.status(200).json({
        message: "Deletado com sucesso",
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar" });
    }
  }
}

module.exports = ControllerCliente;
