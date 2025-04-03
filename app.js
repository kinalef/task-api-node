const express = require('express');
const app = express();

app.use(express.json());

// 👉 Importar rutas
const taskRoutes = require('./routes/tasks.routes');

app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('API de gestión de tareas funcionando');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});