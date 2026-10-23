# GameVault — Catálogo de videojuegos con React

Página web hecha con **React (componentes funcionales + JSX)** y **Vite** donde se puede explorar un catálogo de videojuegos, buscar por nombre, filtrar por género, marcar favoritos y ver el detalle de cada juego. No usa backend ni API: los datos están en un array de objetos dentro del proyecto.

## Funcionalidades

- Catálogo de **12 videojuegos** en tarjetas (nombre, imagen, género y año).
- **Búsqueda** por nombre que se actualiza mientras se escribe.
- **Filtro por género** (Acción, Aventura, Deportes, Estrategia). Búsqueda y filtro funcionan al mismo tiempo.
- **Favoritos**: botón para marcar/desmarcar, contador y opción para ver solo favoritos.
- **Detalle** en un modal con descripción, género, año, desarrollador y plataformas.

## Requisitos previos

- [Node.js](https://nodejs.org/) versión 18 o superior (incluye `npm`).

Para verificar que lo tienes:

```bash
node -v
npm -v
```

## Cómo ejecutar el proyecto

1. Abre una terminal dentro de la carpeta del proyecto:

   ```bash
   cd catalogo-videojuegos
   ```

2. Instala las dependencias (la primera vez tarda entre 30 segundos y 2 minutos, según tu internet):

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo (arranca en 2-5 segundos):

   ```bash
   npm run dev
   ```

4. Abre en el navegador la dirección que aparece en la terminal, normalmente: <http://localhost:5173>

### Otros comandos

| Comando           | Qué hace                                                    |
| ----------------- | ----------------------------------------------------------- |
| `npm run build`   | Genera la versión de producción en la carpeta `dist/`       |
| `npm run preview` | Sirve localmente la versión de producción para probarla     |

## Estructura del proyecto

```
catalogo-videojuegos/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/               ← portadas (SVG) de cada juego
└── src/
    ├── main.jsx              ← punto de entrada de React
    ├── App.jsx               ← estados y lógica de filtrado
    ├── index.css             ← estilos
    ├── data/
    │   └── games.js          ← array con los videojuegos
    └── components/
        ├── SearchBar.jsx     ← campo de búsqueda
        ├── GenreFilter.jsx   ← botones de género
        ├── GameCard.jsx      ← tarjeta de cada juego
        └── GameDetail.jsx    ← modal con el detalle
```

## Cómo agregar o cambiar videojuegos

Edita el archivo `src/data/games.js` y agrega un objeto con esta forma:

```js
{
  id: 13,                          // debe ser único
  name: "Nombre del juego",
  image: "/images/mi-imagen.svg",  // archivo dentro de public/images
  genre: "Acción",
  year: 2024,
  developer: "Estudio",
  platforms: "PC, PlayStation 5",
  description: "Descripción corta del juego.",
}
```

Si usas un género nuevo, aparece solo como opción en el filtro, porque la lista se genera a partir de los datos.

## Nota sobre las imágenes

Las portadas incluidas son imágenes **SVG generadas para el proyecto** (placeholders con el nombre del juego), para que funcione sin internet y sin problemas de derechos de autor. Para usar portadas reales, copia los archivos (`.jpg` o `.png`) a `public/images/` y cambia el campo `image` de cada juego en `games.js`.

## Tecnologías

- React 18 (componentes funcionales, JSX, `useState`)
- Vite 5
- CSS puro
