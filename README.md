# Iglobal Adventure SpA backend tecnical test

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

1. Clona este repositorio o descárgalo como ZIP.
2. Navega a la carpeta del proyecto.
3. Instala las dependencias con el siguiente comando:

```bash
npm install
``````
4. Para iniciar en modo desarrollo, una vez instaladas las dependencias, se utiliza el siguiente comando:
```bash
nodemon start
```

## Endpoints personalizados:
Con la intención de dar una visión un poco más amplia sobre mis habilidades, desarrollé una API con Node JS y MongoDB. A continuación presento sus rutas, y información que recibe el mismo endpoint.
- ### Endpoints:
  - Endpoint 1 - registrar nuevo usuario
    - URL: https://iglobal-adventures-spa-backend.netlify.app/.netlify/functions/app/users/register
    - Metodos aceptados: POST
    - Para este endpoint se requiere del campo nombre de usuario (username), email (email) y contraseña (password).
    - Si el email ya está cargado en la base de datos, retornará error.
   - Endpoint 2 - loguearse
      - URL: https://iglobal-adventures-spa-backend.netlify.app/.netlify/functions/app/users/login
      - Metodos aceptados: POST
      - Para este endpoint se requiere del campo email (email) y contraseña (password).
    - Endpoint 3 - nueva programacion de demostracion
      - URL: https://iglobal-adventures-spa-backend.netlify.app/.netlify/functions/app/schedule/new
      - Metodos aceptados: POST
      - Para este endpoint se requiere del campo nombre completo (fullName), nombre de la compañia (companyName), contacto (contact), email (email), fecha (date), socio (partner). Entre parentesís podemos encontrar como reciben estos parametros.
    - Endpoint 4 - obtener agendas programadas
      - URL: https://iglobal-adventures-spa-backend.netlify.app/.netlify/functions/app/schedule/get/:email
      - Metodos aceptados: GET
      - Para este endpoint se requiere del el email, pero este deve ser enviado en el mismo endpoint, de forma de parametro, aquí un ejemplo: ...app/schedule/get/ivanngarcilazo.dv@gmail.com
    - Endpoint 5 - borrar agenda programada
      - URL: https://iglobal-adventures-spa-backend.netlify.app/.netlify/functions/app/schedule/delete
      - Metodos aceptados: DELETE
      - Para este endpoint se requiere del el id de la agenda especifica a ser borrada, se recibe de la siguiente forma: _id
    - Endpoint 6 - editar agenda programada
      - URL: https://iglobal-adventures-spa-backend.netlify.app/.netlify/functions/app/schedule/update
      - Metodos aceptados: PUT
      - Para este endpoint se requiere el cuerpo de la agenda a editar, incluido su _id, ya que este mismo es usado como primary key.
    - ### ¿Qué tener en cuenta?
      - Cada correo de usuario es único, por lo tanto si se intenta registrar un nuevo usuario con el mismo correo retornará un error.
      - Cada fecha es única, si se intenta agendar una fecha en un dia que esté ocupado por cualquier otro usuario retornará un error.
      - Toda contraseña está encriptada mediante bcrypt.
