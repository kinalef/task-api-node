const express = require('express');
const router = express.Router();

// Lista de tareas simuladas
const tareas = [
  { id: 1, titulo: "Comprar pan", estado: "pendiente" },
  { id: 2, titulo: "Estudiar Node.js", estado: "en progreso" },
  { id: 3, titulo: "Lavar la loza", estado: "completada" }
];

router.get('/', (req, res) => {
  res.json(tareas);
});

module.exports = router;