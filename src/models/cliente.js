const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Cliente = sequelize.define(
  "clientes",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Cliente;
