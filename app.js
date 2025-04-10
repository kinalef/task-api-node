const express = require('express');
const { swaggerUi, swaggerSpec } = require('./swagger');
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Importar rutas
const taskRoutes = require('./routes/tasks.routes');
const authRoutes = require('./routes/auth.routes');

app.use('/api/tasks', taskRoutes);
app.use('/api', authRoutes); 

app.get('/', (req, res) => {
  res.send('API de gestión de tareas funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;