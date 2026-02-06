# Nest Prisma Template

Template base para iniciar proyectos con **NestJS** y **Prisma 6.14.0**.

---

## 🚀 Uso del Template

### 1️⃣ Crear repositorio desde el template
- Usar la opción **Use this template** en GitHub  
- Template: `nest-prisma-template`

---

### 2️⃣ Abrir el proyecto
Ingresar a la carpeta del repositorio creado.

---

### 3️⃣ Configurar variables de entorno

#### Archivo `.env`
Definir el puerto del proyecto:

    PORT=4001

#### Archivo `.env.development`
Definir el nombre de la base de datos:

    DATABASE_URL=mysql://root:Yordii@localhost:3306/nombre_db

---

### 4️⃣ Inicializar el proyecto
Ejecutar:

    npm run init:project

Este comando:
- Instala dependencias  
- Ejecuta migraciones de Prisma  
- Crea la base de datos si no existe  
- Levanta backend en puerto definido

Prisma pedirá un **nombre para la migración**.

---

Probar el endpoint:

    GET http://localhost:PORT/api/tests

---

## ✅ Requisitos
- Node.js  
- MySQL | PostgreSQL  
- npm | pnpm
