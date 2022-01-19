# BabelFinal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
//	post	/registrar
registrar un usuario

// post	/logear
logear //devuelva ok o no

// get (2 parametros, un user y una password)	/list
//listado de usuarios

Crear Api validaciones con express express-validator mongoose dotenv bcrypt jsonwebtoken

1- inicializamos nuestro proyecto 
	npm init, nos crea un archivo llamado packageJson
	luego instalaremos algunas dependencias en modo desarrollo para eso es el parametro -D
	npm i -D nodemon 
	npm i express mongoose dotenv

	

2- Crear el Controller auth
	Con bcrypt comparamos el pass haseado	
	Tenemos que revisar que el usuario exista al iniciar sesion
	comparar el pass y si todo eso es correcto crear el jwt
	
	
3- Vamos a Crear un proyecto (.TAREA.)
	Necesitamos Modelo
	Ruta
	Controller

4- Validar usuario autenticado nuestro propio Middleware
	con jwt
	leer el token que viene en el header
	verificar token
	luego con express-validator en la ruta 
	a continuacion en el controller del proyecto leemos el resultado de la validacion

5- Obtener todos los proyectos del usuario autenticado
	en proyecto en el controller

   ESTO ES EN LA CLASE DEL 30/9

B) Eliminar un proyecto

C) Tarea para hacer en grupo:
    
    1) hacer modelo Tarea:
        nombre (string), 
        estado (boolean),
        fechaCreado (date), 
        proyectoAlQuePertenecen(mongoose.Schema.Types.ObjectId ref: Proyectos)

    2) Luego agegar el router de la Tarea en el index.js:
     app.use('/api/tareas', require('./routes/tareas'))

    3) Craar en la carpeta routes el archivo tareas.js 
    aqui copiar de proyecto routes las primeras lineas 
    
    4) Crear tareaController.js en la carpeta Controllers 

    5) importar modelo de Tarea:
     IMPORTANTE, LAS TAREAS PERTENECEN A LOS PROECTOS,IMPORTAR MODELO PROYECTO
    
    6) Antes de crear una Tarea:
        - Debemos asegurarnos que el proyecto existan
        - Luego validar si el proyecto actual pertenece al usuario autenticado
        - Creamos la tarea

    hacer esto en el tareaController.js

    7) probar con postman por ejemplo

D) Obtener tareas o tarea por proyecto ( hacer esto en el tareaController.js )
    1) extrar el id del proyecto que viene por body
    2) comprobar si existe
    3) validar si el proyecto actual pertenece al usuario autenticado
    4) Obtener Tareas o Tarea por proyecto
    5) no olvidar el auth en el routes de tarea.js nuestro Middleware
    6) probar con postman por ejemplo

E) Actualizar una tarea 
    1) en la routes tareas.js hacer el put ('/:id') no olvidar auth y tareaController.actalizarTarea
    2) en la tarea controller hacer el metodo actualizarTarea 
    3) validar si la tarea existe o no (req.params.id)    
    4) extraer el proyecto, nombre y estado, que viene por body !!!!
    5) comprobar si existe
    6) validar si el proyecto actual pertenece al usuario autenticado 
    7) crear un objeto con la nueva informacion 
    8) validar si viene nombre y estado para actualizar si es necesario  agregar a nuestro objeto
    9) guardar la tarea ( "findOneAndUpdate({ _id: req.params.id }, "objeto(7)", { new: true } )" )
    10) enviar tarea al frond. Probar con postman por ejemplo