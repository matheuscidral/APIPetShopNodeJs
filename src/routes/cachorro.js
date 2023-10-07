const express = require("express");
const ControllerCachorro = require("../controllers/cachorro");

const controller = new ControllerCachorro();
const router = express.Router();

router.get("/api/getCachorro/:id", controller.GetCachorro);
router.get("/api/getCachorros", controller.GetCachorros);
router.post("/api/addCachorro", controller.AddCachorro);
router.put("/api/updateCachorro/:id", controller.UpdateCachorro);
router.delete("/api/deleteCachorro/:id", controller.DeleteCachorro);

module.exports = router;
