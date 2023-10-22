const Cliente = require("../models/cliente");
const Cachorro = require("../models/cachorro");
const Usuario = require("../models/usuario");

class RepositorieCliente {
  async GetCliente(cliente_id, transaction) {
    return Cliente.findOne({
      where: { cliente_id },
      transaction,
      include: [Cachorro],
    });
  }

  async GetClientes() {
    return Cliente.findAll();
  }

  async AddCliente(email, senha, nome, telefone) {
    const { dataValues: usuario } = await Usuario.create({
      email,
      senha,
      permissao: 1,
    });

    return Cliente.create({
      nome: nome,
      telefone: telefone,
      usuario_id: usuario.usuario_id,
    });
  }

  async UpdateCliente(id, nome, telefone) {
    return Cliente.update(
      {
        nome: nome,
        telefone: telefone,
      },
      {
        where: { cliente_id: id },
      }
    );
  }

  async DeleteCliente(id) {
    Usuario.destroy({
      where: { usuario_id: id },
    });

    return Cliente.destroy({
      where: { cliente_id: id },
    });
  }
}

module.exports = RepositorieCliente;
