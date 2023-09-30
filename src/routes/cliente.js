const express = require("express");
const ControllerExercicio = require("../controllers/exercicio");

const controller = new ControllerExercicio();
const router = express.Router();

router.get("/api/nomes/", controller.PegarTodos);
router.get("/api/nome/:id", controller.PegarUm);
router.post("/api/nome", controller.Add);
router.put("/api/nome/:id", controller.Alterar);
router.delete("/api/nome/:id", controller.Deletar);

module.exports = router;
