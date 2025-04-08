const request = require('supertest');
const app = require('../app');
const taskRoutes = require('../routes/tasks.routes');

app.use('/tasks', taskRoutes);

const { Tarea, sequelize } = require('../models');

beforeAll(async () => {
    await sequelize.sync({ force: true }); 
});
afterEach(async () => {
  await Tarea.destroy({ where: {} }); 
});
afterAll(async () => {
  await sequelize.close(); 
});

describe('POST /tasks', () => {
  it('debería crear una nueva tarea', async () => {
    const nuevaTarea = {
      titulo: 'Tarea de prueba',
      descripcion: 'Esto es solo una prueba',
      estado: 'pendiente',
    };

    const response = await request(app)
      .post('/tasks')
      .send(nuevaTarea);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.titulo).toBe(nuevaTarea.titulo);
  });
}); 

describe('GET /tasks', () => {
    it('debería responder con un array de tareas', async () => {
      await Tarea.create({ titulo: 'Ver tareas', descripcion: 'ver todas', estado: 'pendiente' });
  
      const response = await request(app).get('/tasks');
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
  
  describe('PUT /tasks', () => {
    it('debería actualizar una tarea', async () => {
      const tarea = await Tarea.create({ titulo: 'Antigua', descripcion: '...', estado: 'pendiente' });
  
      const actualizaTarea = {
        titulo: 'Nuevo titulo',
        estado: 'terminada'
      };
  
      const response = await request(app)
        .put(`/tasks/${tarea.id}`)
        .send(actualizaTarea);
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.titulo).toBe(actualizaTarea.titulo);
      expect(response.body.estado).toBe(actualizaTarea.estado);
    });    
  });
  
  describe('DELETE /tasks', () => {
    it('debería eliminar una tarea', async () => {
      const tarea = await Tarea.create({ titulo: 'Eliminar', descripcion: 'borrar esto', estado: 'pendiente' });
  
      const response = await request(app)
        .delete(`/tasks/${tarea.id}`);
  
      expect(response.statusCode).toBe(200);
    });    
  });
