const express = require("express");
const ControllerCachorro = require('../controllers/cachorros');
const authMiddleware = require("../middleware/auth");

const cachorrosController = new ControllerCachorro();
const router = express.Router();

router.get('/api/cachorros/', authMiddleware, cachorrosController.PegarTodos);
router.get('/api/cachorro/:id', authMiddleware, cachorrosController.PegarUm);
router.post('/api/cachorro', authMiddleware, cachorrosController.Add);
router.put('/api/cachorro/:id', authMiddleware, cachorrosController.Update);
router.delete('/api/cachorro/:id', authMiddleware, cachorrosController.Delete);

module.exports = router;
