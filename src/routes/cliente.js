const express = require("express");
const ControllerCliente = require("../controllers/cliente");

const controller = new ControllerCliente();
const router = express.Router();

router.get("/api/getCliente/:id", controller.GetCliente);
router.get("/api/getClientes", controller.GetClientes);
router.post("/api/addCliente", controller.AddCliente);
router.put("/api/updateCliente/:id", controller.UpdateCliente);
router.delete("/api/deleteCliente/:id", controller.DeleteCliente);

module.exports = router;
