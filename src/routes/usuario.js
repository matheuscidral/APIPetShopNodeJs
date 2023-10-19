const express = require("express");
const ControllerUsuario = require("../controllers/usuario.js");
const authMiddleware = require("../middleware/auth.js");

const router = express.Router();
const controllers = new ControllerUsuario();

router.post("/api/login", controllers.Login);
router.post("/api/signin", controllers.AddAdmin);
router.get("/api/usuarios/", authMiddleware, controllers.GetUsuarios);
router.get("/api/usuario/:id", authMiddleware, controllers.GetUsuario);
router.post("/api/usuario", authMiddleware, controllers.AddUsuario);
router.put("/api/usuario/:id", authMiddleware, controllers.UpdateUsuario);
router.delete("/api/usuario/:id", authMiddleware, controllers.DeleteUsuario);

module.exports = router;
