const express = require('express');
const router = express.Router();

const { obtenerTareas, crearTarea, actualizarTarea, eliminarTarea } = require('../controllers/task.controller');

// GET /tasks
router.get('/', obtenerTareas);

// POST /tasks
router.post('/', crearTarea);

// PUT /tasks
router.put('/:id', actualizarTarea);

// DELETE /tasks
router.delete('/:id', eliminarTarea);

module.exports = router;