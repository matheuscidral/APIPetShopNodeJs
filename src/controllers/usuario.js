const ServicoUsuario = require("../services/usuario.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config.js");

const servico = new ServicoUsuario();

class ControllerUsuario {
  async Login(req, res) {
    const { email, senha } = req.body;

    const { dataValues: usuario } = await servico.GetUsuarioPorEmail(email);

    if (!usuario) {
      return res.status(401).json({ mensagem: "Credenciais inválidas" });
    }
    console.log(usuario.senha, senha);
    if (!(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ mensagem: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { id: usuario.id, nome: usuario.nome, email: usuario.email },
      config.secret
    );

    res.json({ mensagem: "Login bem-sucedido", token });
  }

  async GetUsuario(req, res) {
    const { nome } = req.session;
    try {
      const id = req.params.id;

      const result = await servico.GetUsuario(id);

      if (!result) {
        return res
          .status(404)
          .json({ message: "Lamentamos, " + nome + ", id não encontrado!" });
      }

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }

  async GetUsuarios(_, res) {
    try {
      const result = await servico.GetUsarios();

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async AddUsuario(req, res) {
    try {
      const { usuario } = req.body;

      await servico.AddUsuario(usuario);

      res.status(201).json({ message: "Adicionado com sucesso!" });
    } catch (error) {
      if (error.parent.code === "ER_DUP_ENTRY") {
        res.status(500).json({ message: "Email já cadastrado!" });
      }
      res.status(500).json({ message: error.parent.message || error.message });
    }
  }

  async AddAdmin(req, res) {
    try {
      const { usuario } = req.body;

      await servico.Add(usuario, true);

      res.status(201).json({ message: "Adicionado com sucesso!" });
    } catch (error) {
      if (error.parent.code === "ER_DUP_ENTRY") {
        res.status(500).json({ message: "Email já cadastrado!" });
      }
      res.status(500).json({ message: error.parent.message || error.message });
    }
  }

  async UpdateUsuario(req, res) {
    try {
      const id = req.params.id;
      const nome = req.body.nome;

      await servico.UpdateUsuario(id, nome);

      res.status(200).json({ message: "Alterado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: error.errors.message || error.message });
    }
  }

  async DeleteUsuario(req, res) {
    try {
      const id = req.params.id;

      await servico.DeleteUsuario(id);

      res.status(200).json({ message: "Deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ControllerUsuario;
