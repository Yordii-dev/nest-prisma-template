Nest Prisma Template

Template base para iniciar proyectos con NestJS y Prisma.

USO DEL TEMPLATE

1. Crear repositorio desde el template  
Usar la opción "Use this template" en GitHub.  
Template: nest-prisma-template

2. Abrir el proyecto  
Entrar a la carpeta del repositorio creado.

3. Configurar variables de entorno  

Archivo .env  
Definir el puerto del proyecto.  
PORT=4001

Archivo .env.development  
Definir el nombre de la base de datos.  
DATABASE_URL=mysql://root:Yordii@localhost:3306/nombre_db

4. Inicializar el proyecto  

Ejecutar el comando:  
npm run init:project  

Este comando:
- Instala dependencias  
- Ejecuta migraciones de Prisma  
- Crea la base de datos si no existe  

Prisma pedirá un nombre para la migración.

5. Iniciar el servidor  

Ejecutar:  
npm run start:dev  

PRUEBAS

El template incluye una tabla de ejemplo llamada Role.

Probar el endpoint con GET:  
http://localhost:4001/api/masters/all-roles

REQUISITOS
- Node.js
- MySql | PostgreSQL
- npm | pnmp
