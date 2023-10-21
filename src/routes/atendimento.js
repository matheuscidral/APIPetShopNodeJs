const express = require("express");
const ControllerAtendimento = require("../controllers/atendimento");
const authMiddleware = require("../middleware/auth");

const controller = new ControllerAtendimento();
const router = express.Router();

router.get("/api/getAtendimento/:id", authMiddleware ,controller.GetAtendimento);
router.get("/api/getAtendimentos", authMiddleware ,controller.GetAtendimentos);
router.post("/api/addAtendimento", authMiddleware ,controller.AddAtendimento);
router.put("/api/updateAtendimento/:id", authMiddleware ,controller.UpdateAtendimento);
router.delete("/api/deleteAtendimento/:id", authMiddleware ,controller.DeleteAtendimento);

module.exports = router;
