# 🌱 Seeders de Task API

Este directorio contiene los archivos usados para poblar la base de datos con datos de prueba usando Sequelize.

## ⚙️ Comandos útiles

### Crear un seeder
```bash
npx sequelize-cli seed:generate --name demo-tareas
```

### Ejecutar todos los seeders
```bash
NODE_ENV=development npx sequelize-cli db:seed:all
```

### Revertir el último seeder
```bash
NODE_ENV=development npx sequelize-cli db:seed:undo
```

### Revertir todos los seeders
```bash
NODE_ENV=development npx sequelize-cli db:seed:undo:all
```

## 📌 Notas
- Los seeders son útiles para pruebas locales y ambientes de desarrollo.
- Se recomienda no usar seeders en producción a menos que estén controlados cuidadosamente.
