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

#### Archivo `compose.dev.yml, compose.prod.yml, .env.development, .env.production, get_envs_from_ec2.ps1, send_envs_to_ec2.ps1, .github/workflows/deploy.yml`
Reemplazar 'PROJECT', 'DB_PORT', 'PORT_FOR_SSH_TUNEL', 'HOST_IP' por valores corectos:
    
    container_name: PROJECT_mysql_dev (reemplazar 'PROJECT')
    DATABASE_URL=mysql://nestjs:password@localhost:DB_PORT/PROJECT (reemplazar 'PROJECT', 'DB_PORT')
    ...
    ...

Agregar 3 variables al repositorio github para el workflow gh

#### Archivo `.env`
Definir el puerto del proyecto:

    PORT=4001


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
