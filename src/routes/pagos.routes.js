const express = require('express');
const router = express.Router();
const { crearPago, getPago, getTodosPagos, actualizarPago, borrarPago } = require('../controllers/pagos.controller');

router.post('/', crearPago);
router.get('/:id', getPago);
router.get('/', getTodosPagos);
router.put('/:id', actualizarPago);
router.delete('/:id', borrarPago);

module.exports = router;