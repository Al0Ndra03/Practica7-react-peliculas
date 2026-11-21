# Práctica 7 - Aplicación Web de Películas con React y Vite

## Integrante
- Alondra Castillo (Modalidad Individual)

## Objetivo
Desarrollar una aplicación web de página única (SPA) utilizando React y Vite que consuma datos en tiempo real desde la API externa de TMDB, implementando navegación dinámica entre un catálogo principal y la vista de detalle de cada película, control de versiones en GitHub y despliegue en producción mediante Netlify.

## Tecnologías Utilizadas
- **React** (Biblioteca de interfaz de usuario)
- **Vite** (Entorno de desarrollo y empaquetador)
- **React Router DOM** (Enrutamiento declarativo del lado del cliente)
- **CSS3** (Estilos responsivos con Grid y Flexbox)
- **API de TMDB** (The Movie Database)
- **Git y GitHub** (Control de versiones)
- **Netlify** (Despliegue continuo)

## Estructura General del Proyecto
```text
Practica7-react-peliculas/
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Footer.jsx / Footer.css
│   │   ├── MovieCard.jsx / MovieCard.css
│   │   └── MovieGrid.jsx / MovieGrid.css
│   ├── img/
│   │   ├── escudo-cucei.png
│   │   └── placeholder.png
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   └── MovieDetails.jsx / MovieDetails.css
│   ├── routers/
│   │   └── AppRouter.jsx
│   ├── services/
│   │   └── httpClient.js
│   ├── utils/
│   │   └── getMovieImg.js
│   ├── App.jsx / App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md

Para replicar este proyecto:

Instalación y Ejecución Local
Clonar el repositorio:

Bash
git clone [https://github.com/Tu_usuario/Practica7-react-peliculas.git](https://github.com/Tu_usuario/Practica7-react-peliculas.git)

Entra a la carpeta del proyecto e instalar dependencias:

Bash
cd Practica7-react-peliculas
npm install
Crear un archivo .env en la raíz del proyecto y agregar la clave de API de TMDB:

Fragmento de código
VITE_TMDB_API_KEY=tu_api_key_aqui
Iniciar el servidor de desarrollo:

Bash
npm run dev
Rutas Utilizadas
/ — Página principal (LandingPage): muestra la cuadrícula con las tarjetas de películas obtenidas desde el endpoint /discover/movie.

/movies/:movieId — Vista de detalle (MovieDetails): recibe el parámetro dinámico movieId y consulta /movie/:movieId para mostrar póster, título, géneros y sinopsis.

API Utilizada
Se utiliza la API REST de The Movie Database (TMDB v3) mediante fetch encapsulado en src/services/httpClient.js, autenticando las peticiones con una variable de entorno (VITE_TMDB_API_KEY) y configurando el idioma en es-MX.

Funcionamiento
La aplicación carga inicialmente un listado de películas en tarjetas interactivas. Al hacer clic en cualquier tarjeta, React Router redirige sin recargar el navegador hacia la ruta /movies/:movieId, mostrando la ficha técnica completa y permitiendo regresar al catálogo principal.

Enlaces de Despliegue
Repositorio en GitHub: https://github.com/Al0Ndra03/Practica7-react-peliculas

Aplicación publicada en Netlify: https://practica7-react-peliculas-v60h.netlify.app/

Conclusiones
La realización de esta práctica permitió comprender el flujo completo de desarrollo moderno en React con Vite: desde la separación modular por componentes, servicios y utilidades, hasta el manejo de variables de entorno para proteger credenciales de API. Asimismo, la integración continua entre GitHub y Netlify demostró la importancia de configurar correctamente las redirecciones (_redirects) en aplicaciones SPA para evitar errores de enrutamiento en producción.