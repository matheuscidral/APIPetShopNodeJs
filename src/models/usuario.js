const { DataTypes } = require("sequelize");
const sequelize = require("../database.js");

const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permissao: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Usuario;
