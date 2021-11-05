# Entrega2_002D_RetamalOrme-o
Este repositorio contiene la app con crud , api rest, y persistencia de datos, de la entrega 2 de la sección 002D del ramo Programacion de Apps. móviles.

Pasos que realizamos en la aplicación.
Primero en el cmd, nos dirigimos a la ruta de la App creada, en éste caso usamos ionic storage y firebase.
Para instalar ionic Storage (la versión 3.0.6), en la misma ruta de nuestra app, ejecutamos el comando "npm install @ionic/storage" una vez finalizado éste paso,
instalamos el plugin para trabajar ionic storage en Angular, el cual es "npm install @ionic/storage-angular. Luego de estos dos pasos, generamos un servicio en la misma consola
el comando es ionic generate service services/"y el nombre del archivo" en nuestro caso lo nombramos servicedatos, al final se importan el Ionic Storage Module y los Drivers desde @ionic/storage.
todo esto en nuestro app.module.ts

eso hicimos en Ionic Storage, ahora con Firebase, los pasos son muy similares, en el cmd en la ruta de la app
Primero nos registramos en el sitio web de Firebase, creamos nuestro proyecto e importamos la api y la apiKey que nos genera, luego instalamos
 el plugin de firebase para angular, con el comando npm install firebase @angular/fire , posterior a eso generamos el service, para la autentificación de nuestro login.
Ademas de generar un Guard, que nos servirá para exigir el Login en ciertos Pages. Finalmente importamos los modulos de AngularFireModule y Angular Fire Auth Module, desde @angular/fire.
Una vez ya listo, continuamos nuestro desarrollo de la app.
Integrantes del Grupo:
			-Daniel Retamal
			-Matias Ormeño

Nombre del Proyecto: Yapue.