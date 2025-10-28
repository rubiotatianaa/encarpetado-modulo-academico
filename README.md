
Documentación del Front – Proyecto Integrador

Esta parte del proyecto corresponde al Frontend, cuyo objetivo principal es mostrar al estudiante sus notas y el promedio general de acuerdo con sus calificaciones.

Fue desarrollada con React para la creación de componentes dinámicos y Vite para optimizar el entorno de desarrollo. Durante su implementación se aplicaron buenas prácticas, diseños responsivos y el uso de Hooks de React.



Tecnologías Utilizadas

•	React: Biblioteca para construir interfaces de usuario dinámicas.

•	Vite: Herramienta para empaquetar y ejecutar el proyecto de forma rápida y eficiente.

•	CSS3 / uiverse.io: Estilos visuales y diseño responsivo.

•	React Router DOM: Navegación entre páginas dentro de la aplicación.

•	SweetAlert2: Creación de alertas visuales y personalizadas.



Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

•	Node.js versión 16.x.x o superior.

•	npm (instalado junto con Node.js).



Instalación y Ejecución

•	Instalar dependencias:

•	npm install

o	Este comando lee el archivo package.json y descarga todas las dependencias necesarias dentro de la carpeta node_modules.

•	Ejecutar el servidor de desarrollo:

•	npm run dev

Este comando inicia el entorno de desarrollo local.

Al ejecutarlo, aparecerá una URL en la consola, por ejemplo:

http://localhost:5173

Cópiala y pégala en tu navegador para visualizar la aplicación.



Estructura del Proyecto

La estructura del proyecto se encuentra organizada dentro de la carpeta principal src/, la cual contiene las siguientes subcarpetas y archivos:

carpeta componentes/

Contiene los componentes reutilizables y pequeños del sistema.

•	Header.jsx / Header.css: Componen la cabecera o barra de navegación del sitio junto con sus estilos.

•	Footer.jsx / Footer.css: Representan el pie de página del sitio con su respectivo diseño.

•	ProtegerRutas.jsx: Implementa la lógica de protección de rutas, restringiendo el acceso a ciertas páginas para usuarios no autenticados.

carpeta pages/

Almacena las páginas principales del sistema, cada una con su respectivo archivo. jsx y su hoja de estilos .css.

•	Registro.jsx / Registro.css: Permiten que el usuario se registre; la información queda guardada en la base de datos o simulación local.

•	Login.jsx / Login.css: Página de inicio de sesión del usuario.

•	Home.jsx / Home.css: Página principal que muestra la bienvenida al usuario una vez ha iniciado sesión.

•	Notas.jsx / Notas.css: Página donde se visualizan las notas y promedios del estudiante.

carpeta routes/

Contiene la configuración de las rutas del proyecto.

•	routerApp.jsx: Archivo donde se definen las rutas de navegación (por ejemplo, Home, Login, Notas, etc.) y la lógica de protección de rutas mediante React Router.

carpeta utils/

Guarda funciones auxiliares y archivos de lógica reutilizable para todo el sistema.

•	alertas.js: Maneja las alertas o notificaciones (usando SweetAlert2).

•	basedatos.js: Contiene la simulación de una base de datos o almacenamiento local.

•	funciones.js: Incluye funciones generales o de apoyo utilizadas por varios componentes.

archivo main.jsx

Es el punto de entrada principal del proyecto.

Aquí se inicializa la aplicación React, se renderiza el componente raíz y se integran los routers o contextos globales.



Conclusión

Este proyecto permitió poner en práctica los conocimientos adquiridos en React, aplicando componentización, ruteo, Hooks y arquitectura modular.

Además, fortaleció las habilidades en diseño responsivo, organización del código y manejo de herramientas modernas de desarrollo frontend.











No se ha seleccionado ningún archivoNo se ha seleccionado ningún archivo

