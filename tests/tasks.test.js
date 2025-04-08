const request = require('supertest');
const express = require('express');
const taskRoutes = require('../routes/tasks.routes');

const app = express();
app.use(express.json());
app.use('/tasks', taskRoutes);

describe('GET /tasks', () => {
  it('debería responder con un array de tareas', async () => {
    const response = await request(app).get('/tasks');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe('POST /tasks', () => {
    it('debería crear una nueva tarea', async () => {
      const nuevaTarea = {
        titulo: 'Aprender testing',
        estado: 'pendiente'
      };
  
      const response = await request(app)
        .post('/tasks')
        .send(nuevaTarea);
  
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.titulo).toBe(nuevaTarea.titulo);
      expect(response.body.estado).toBe(nuevaTarea.estado);
    });
  
    it('debería rechazar si falta título o estado', async () => {
      const response = await request(app)
        .post('/tasks')
        .send({ titulo: 'Falta el estado' });
  
      expect(response.statusCode).toBe(400);
      expect(response.body.mensaje).toMatch(/obligatorios/);
    });
  });

  describe('PUT /tasks', () => {
    it('debería actualizar una tarea', async () => {
      // Obtener tareas existentes
      let tasks = await request(app).get('/tasks');
      tasks = tasks.body;
  
      const actualizaTarea = {
        titulo: 'Nuevo titulo',
        estado: 'terminada'
      };
  
      // Usar el ID de la primera tarea
      const response = await request(app)
        .put(`/tasks/${tasks[0].id}`)
        .send(actualizaTarea);
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.titulo).toBe(actualizaTarea.titulo);
      expect(response.body.estado).toBe(actualizaTarea.estado);
    });    
  });

  describe('DELETE /tasks', () => {
    it('debería eliminar una tarea', async () => {
      // Obtener tareas existentes
      let tasks = await request(app).get('/tasks');
      tasks = tasks.body;
      // Usar el ID de la primera tarea
      const response = await request(app)
        .delete(`/tasks/${tasks[0].id}`)
  
      expect(response.statusCode).toBe(200);
    });    
  });
