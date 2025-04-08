# 📝 Task API - API de Gestión de Tareas

Una API RESTful creada con **Node.js**, **Express** y **PostgreSQL** que permite gestionar tareas: crear, obtener, actualizar y eliminar.

> Proyecto creado como parte de mi portafolio personal, incluyendo pruebas automatizadas, estructura MVC y uso de Sequelize como ORM.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize (ORM)
- Jest + Supertest (Testing)
- Dotenv

---

## 📦 Características

- CRUD completo de tareas
- Conexión a base de datos PostgreSQL
- Validaciones básicas
- Pruebas automatizadas
- Arquitectura organizada (controladores, rutas, modelos)
- Variables de entorno con `.env`

---

## 📄 Endpoints

| Método | Endpoint      | Descripción                |
|--------|---------------|----------------------------|
| GET    | `/tasks`      | Lista todas las tareas     |
| POST   | `/tasks`      | Crea una nueva tarea       |
| PUT    | `/tasks/:id`  | Actualiza una tarea        |
| DELETE | `/tasks/:id`  | Elimina una tarea          |

---

## ⚙️ Instalación y uso

1. Clona el repositorio:

```bash
git clone git@github.com:kinalef/task-api-node.git
cd task-api-node
```

2. Instala dependencias:

```bash
npm install
```

3. Configura el archivo `.env` con tus credenciales:

```env
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=nombre_bd
DB_HOST=localhost
DB_PORT=5432
```

4. Ejecuta migraciones:

```bash
npx sequelize-cli db:migrate
```

5. Levanta el servidor:

```bash
npm run dev
```

6. Corre los tests (opcional):

```bash
npm test
```

---

## 🛡️ Licencia

Este proyecto está licenciado bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## ✨ Autor

**Katherine Inalef Pineda**  
💻 Desarrolladora Fullstack  
📍 Valdivia, Chile