# Nest Prisma Template

Template base para iniciar proyectos con **NestJS** y **Prisma 6.14.0**.

---

## 🚀 Uso del Template

### 1️⃣ Crear repositorio desde el template
- Usar la opción **Use this template** en GitHub  
- Template: `nest-prisma-template`

---

### 2️⃣ Abrir el proyecto e iniciar Docker Engine
Ingresar a la carpeta del repositorio creado.
Abrir terminal e iniciar docker engine (Windows -> docker compose start)

---

### 3️⃣ Configurar entorno

#### Archivo `compose.dev.yml`
Definir nombre del service de mysql:
    
    container_name: PROJECT_mysql_dev (reemplazar 'PROJECT')


#### Archivo `.env`
Definir el puerto del proyecto:

    PORT=4001

#### Archivo `.env.development`
Definir datos de la bd y la url db final:

    DATABASE_URL=mysql://nestjs:password@localhost:DB_PORT/PROJECT (reemplazar 'PROJECT', 'DB_PORT')

#### Crear BD
En terminal ejecutar:

    docker compose -f .\compose.dev.yml --env-file .\.env.development up  -d 

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
