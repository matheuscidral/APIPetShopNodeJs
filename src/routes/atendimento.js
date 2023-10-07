const express = require("express");
const ControllerAtendimento = require("../controllers/atendimento");

const controller = new ControllerAtendimento();
const router = express.Router();

router.get("/api/getAtendimento/:id", controller.GetAtendimento);
router.get("/api/getAtendimentos", controller.GetAtendimentos);
router.post("/api/addAtendimento", controller.AddAtendimento);
router.put("/api/updateAtendimento/:id", controller.UpdateAtendimento);
router.delete("/api/deleteAtendimento/:id", controller.DeleteAtendimento);

module.exports = router;
