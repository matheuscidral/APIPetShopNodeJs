const express = require("express");
const ControllerUsuarios = require("../controllers/usuarios");
const authMiddleware = require("../middleware/auth");

const usuariosController = new ControllerUsuarios();
const router = express.Router();

// router.get("/api/login", controller.Login);
// router.get("/api/getUsuario/:id", authMiddleware ,controller.GetUsuario);
// router.get("/api/getUsuarios", authMiddleware ,controller.GetUsuarios);
// router.post("/api/addUsuario", authMiddleware ,controller.AddUsuario);
// router.put("/api/updateUsuario/:id", authMiddleware ,controller.UpdateUsuario);
// router.delete("/api/deleteUsuario/:id", authMiddleware ,controller.DeleteUsuario);

module.exports = router;
