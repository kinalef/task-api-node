// Simulamos una "base de datos" temporal

const { Tarea } = require('../models');


// GET /tasks
const obtenerTareas = async (req, res) => {
    try {
      const tareas = await Tarea.findAll();
      res.status(200).json(tareas);
    } catch (error) {
      console.error('Error al obtener tareas:', error);
      res.status(500).json({ mensaje: 'Error al obtener tareas' });
    }
  };
// POST /tasks
const crearTarea = async (req, res) => {
    try {
      const { titulo, estado } = req.body;
  
      // Validaciones básicas
      if (!titulo || !estado) {
        return res.status(400).json({ mensaje: 'Los campos título y estado son obligatorios.' });
      }
  
      const nuevaTarea = await Tarea.create({ titulo, estado });
  
      res.status(201).json(nuevaTarea);
    } catch (error) {
      console.error('Error al crear tarea:', error);
      res.status(500).json({ mensaje: 'Error al crear la tarea.' });
    }
  };

  const actualizarTarea = async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, estado } = req.body;
  
      const tarea = await Tarea.findByPk(id);
  
      if (!tarea) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
  
      tarea.titulo = titulo ?? tarea.titulo;
      tarea.estado = estado ?? tarea.estado;
  
      await tarea.save();
  
      res.status(200).json(tarea);
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      res.status(500).json({ mensaje: 'Error al actualizar la tarea' });
    }
  };
  const eliminarTarea = async (req, res) => {
    try {
      const { id } = req.params;
      const tarea = await Tarea.findByPk(id);
  
      if (!tarea) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
  
      await tarea.destroy();
      res.status(200).json({ mensaje: 'Tarea eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      res.status(500).json({ mensaje: 'Error al eliminar la tarea' });
    }
  };

// Exportar funciones
module.exports = {
    obtenerTareas,
    crearTarea,
    actualizarTarea,
    eliminarTarea
  };