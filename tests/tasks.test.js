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