# 📦 Migrations de Task API

Este directorio contiene las migraciones usadas para crear las tablas de la base de datos usando Sequelize.

## ⚙️ Comandos útiles

### Crear una migración
```bash
npx sequelize-cli migration:generate --name crear-tareas
```

### Ejecutar todas las migraciones
```bash
NODE_ENV=development npx sequelize-cli db:migrate
```

### Revertir la última migración
```bash
NODE_ENV=development npx sequelize-cli db:migrate:undo
```

### Revertir todas las migraciones
```bash
NODE_ENV=development npx sequelize-cli db:migrate:undo:all
```

## 📌 Notas
- Las migraciones se ejecutan en el orden en que fueron creadas.
- Asegúrate de revisar el archivo de configuración `config/config.js`.
