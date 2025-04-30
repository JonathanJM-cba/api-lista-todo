# API de Lista de Tareas (To-Do List) - Backend

![Node.js](https://img.shields.io/badge/Node.js-14.x+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.x-blueviolet)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)

Una API RESTful completa para gestionar tareas pendientes con autenticación de usuarios, paginación y filtrado.

## Características Principales

- ✅ Autenticación JWT segura
- ✅ Operaciones CRUD para tareas
- ✅ Paginación y filtrado de resultados
- ✅ Validación de datos
- ✅ Manejo de errores centralizado
- ✅ Hashing seguro de contraseñas

## Requisitos Técnicos

- Node.js 14.x o superior
- PostgreSQL 13.x
- npm o yarn

## Instalación

```bash
git clone https://github.com/tu-usuario/todo-list-api.git
cd todo-list-api
npm install
cp .env.example .env
npx sequelize-cli db:migrate
npm run dev
```

---

## 📌 Endpoints de la API

### 🔐 Registro de Usuario

**POST /api/auth/register**

Registra un nuevo usuario. Se valida que el correo sea único y la contraseña se guarda de forma segura (hasheada).
**Respuesta exitosa:** Token de autenticación.

Parámetros esperados:

- `name`: Nombre del usuario
- `email`: Correo electrónico único
- `password`: Contraseña

---

### 🔐 Inicio de Sesión

**POST /api/auth/login**

Autentica a un usuario con email y contraseña.
**Respuesta exitosa:** Token de autenticación.

Parámetros esperados:

- `email`: Correo electrónico
- `password`: Contraseña

---

### ➕ Crear una Tarea

**POST /api/task/todos**

Crea una nueva tarea. Requiere autenticación mediante token en el encabezado `Authorization`.

Parámetros esperados:

- `title`: Título de la tarea
- `description`: Descripción de la tarea

---

### ✏️ Actualizar una Tarea

**PUT /api/task/todos/:id**

Actualiza una tarea existente. Solo el creador de la tarea puede modificarla. Requiere autenticación.

Parámetros esperados:

- `title`: Nuevo título
- `description`: Nueva descripción

**Errores posibles:**

- 403 Forbidden: El usuario no es el propietario de la tarea

---

### ❌ Eliminar una Tarea

**DELETE /api/task/todos/:id**

Elimina una tarea existente. Requiere autenticación y autorización.
**Respuesta exitosa:** Código de estado 204 (sin contenido)

---

### 📄 Obtener Lista de Tareas

**GET /api/task/todos/paginado?page=1&limit=10**

Obtiene una lista paginada de tareas del usuario autenticado.
Se puede aplicar paginación y filtrado por query params.

Parámetros opcionales:

- `page`: Número de página (por defecto 1)
- `limit`: Número de elementos por página (por defecto 5)

**Respuesta incluye:**

- Lista de tareas
- Página actual
- Límite por página
- Total de tareas

---

## 🎁 Funcionalidades Extra (Bonus)

- ✅ Filtro búsqueda de tareas por título y descripción
- ✅ Validación exhaustiva de entradas
- ✅ Seguridad en rutas privadas
- ✅ Middleware para manejo centralizado de errores

---

## 📚 Referencias

Este proyecto se basó en el desafío propuesto por [roadmap.sh](https://roadmap.sh) para proyectos backend:
🔗 https://roadmap.sh/projects/todo-list-api

---

## 👨‍💻 Autor

**Nombre:** Jonathan Muñoz
**Email:** jonathan20cba@gmail.com

---

```

```
