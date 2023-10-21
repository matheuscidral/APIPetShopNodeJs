const express = require("express");
const ControllerCliente = require("../controllers/cliente");
const authMiddleware = require("../middleware/auth");

const controller = new ControllerCliente();
const router = express.Router();

router.post('/api/login', controller.Login);
router.get("/api/getCliente/:id", authMiddleware ,controller.GetCliente);
router.get("/api/getClientes", authMiddleware ,controller.GetClientes);
router.get('/api/cliente/pets/:dono',authMiddleware,  controller.GetCachorros);
router.post("/api/addCliente", authMiddleware ,controller.AddCliente);
router.put("/api/updateCliente/:id", authMiddleware ,controller.UpdateCliente);
router.delete("/api/deleteCliente/:id", authMiddleware ,controller.DeleteCliente);

module.exports = router;
