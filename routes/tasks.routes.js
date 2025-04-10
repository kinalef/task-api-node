const express = require('express');
const router = express.Router();

const { obtenerTareas,obtenerTareasPorId, crearTarea, actualizarTarea, eliminarTarea } = require('../controllers/task.controller');
const verificarToken = require('../middlewares/verificarToken');

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     security:
 *       - bearerAuth: []
 *     tags: [Tareas]
 *     responses:
 *       200:
 *         description: Lista de tareas
 */
router.get('/', verificarToken, obtenerTareas);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtener una tarea por ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *       404:
 *         description: Tarea no encontrada
 */
router.get('/:id', verificarToken, obtenerTareasPorId);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     security:
 *       - bearerAuth: []
 *     tags: [Tareas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarea creada
 */
router.post('/',verificarToken, crearTarea);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualizar una tarea existente
 *     security:
 *       - bearerAuth: []
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *       404:
 *         description: Tarea no encontrada
 */
router.put('/:id', actualizarTarea);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     security:
 *       - bearerAuth: []
 *     tags: [Tareas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarea eliminada
 *       404:
 *         description: Tarea no encontrada
 */

router.delete('/:id',verificarToken, eliminarTarea);

module.exports = router;