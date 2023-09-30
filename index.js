const express = require("express");
const router = require("./src/routes/cliente.js");
const Pessoa = require("./src/models/cliente.js");

const app = express();
const port = 3000;

new Pessoa();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`>>> Servidor rodando na porta ${port} <<<`);
});