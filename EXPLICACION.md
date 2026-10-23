# Explicación: componentes, props, estado y eventos

Este documento responde al entregable 4: cómo se usan **componentes, props, estado y eventos** en el catálogo de videojuegos.

---

## 1. Componentes

Un componente es una función de JavaScript que devuelve JSX (la interfaz). Todos los componentes de este proyecto son **funcionales** y se dividen según su responsabilidad:

| Componente    | Archivo                           | Para qué sirve                                          |
| ------------- | --------------------------------- | ------------------------------------------------------- |
| `App`         | `src/App.jsx`                     | Componente principal: guarda el estado y filtra los juegos |
| `SearchBar`   | `src/components/SearchBar.jsx`    | Campo de texto para buscar por nombre                   |
| `GenreFilter` | `src/components/GenreFilter.jsx`  | Botones para filtrar por género                         |
| `GameCard`    | `src/components/GameCard.jsx`     | Tarjeta de un videojuego (se reutiliza para cada uno)   |
| `GameDetail`  | `src/components/GameDetail.jsx`   | Modal con la descripción y los datos principales        |

**Ventaja:** `GameCard` se escribe una sola vez y se reutiliza para los 12 juegos. Si cambia el diseño de la tarjeta, se cambia en un solo lugar.

Todo se construye con **JSX**, que permite escribir HTML dentro de JavaScript, por ejemplo:

```jsx
<h3>{game.name}</h3>
```

Las llaves `{}` sirven para insertar valores de JavaScript dentro del JSX.

---

## 2. Estado (`useState`)

El estado es la información que cambia con la interacción del usuario y que, al cambiar, hace que React vuelva a dibujar la pantalla. Todo el estado vive en `App.jsx`:

```jsx
const [search, setSearch] = useState("");                 // texto del buscador
const [genre, setGenre] = useState("Todos");              // género seleccionado
const [favorites, setFavorites] = useState([]);           // ids de los favoritos
const [showOnlyFavorites, setShowOnlyFavorites] = useState(false); // ver solo favoritos
const [selectedGame, setSelectedGame] = useState(null);   // juego abierto en el detalle
```

- Cada `useState` devuelve el **valor actual** (`search`) y una **función para cambiarlo** (`setSearch`).
- Nunca se modifica el valor directamente: siempre se usa la función `set...`, y para el arreglo de favoritos se crea un arreglo nuevo (con `filter()` o con el operador spread `[...]`).
- `selectedGame` vale `null` cuando el modal está cerrado; cuando el usuario toca una tarjeta guarda ese juego y el modal aparece.
- El contador de favoritos no necesita un estado propio: se calcula con `favorites.length`.

**¿Por qué el estado está en `App` y no en cada componente?** Porque varios componentes necesitan los mismos datos (por ejemplo, el contador de favoritos y las tarjetas). Se coloca en el componente padre común y se reparte hacia abajo con props.

---

## 3. Props

Las props son los datos y funciones que un componente padre le pasa a un hijo. Son de **solo lectura**: el hijo las usa, pero no las modifica.

Ejemplo en `App.jsx`, donde se renderiza cada tarjeta:

```jsx
<GameCard
  key={game.id}
  game={game}                           // datos del juego
  isFavorite={favorites.includes(game.id)}  // ¿es favorito? (true/false)
  onToggleFavorite={toggleFavorite}     // función para marcar/desmarcar
  onSelect={setSelectedGame}            // función para abrir el detalle
/>
```

Y en `GameCard.jsx` se reciben así:

```jsx
function GameCard({ game, isFavorite, onToggleFavorite, onSelect }) { ... }
```

Resumen de las props de cada componente:

| Componente    | Props que recibe                                              |
| ------------- | ------------------------------------------------------------- |
| `SearchBar`   | `value`, `onChange`                                           |
| `GenreFilter` | `genres`, `selected`, `onSelect`                              |
| `GameCard`    | `game`, `isFavorite`, `onToggleFavorite`, `onSelect`          |
| `GameDetail`  | `game`, `isFavorite`, `onToggleFavorite`, `onClose`           |

Así se logra que **los datos bajen** del padre al hijo (props normales) y que **las acciones suban** del hijo al padre (funciones que llegan como props y que el hijo llama cuando ocurre un evento).

---

## 4. Eventos (`onChange` y `onClick`)

Los eventos conectan las acciones del usuario con cambios en el estado.

### `onChange` — buscador (`SearchBar.jsx`)

```jsx
<input
  value={value}
  onChange={(event) => onChange(event.target.value)}
/>
```

Cada vez que el usuario escribe una letra se dispara `onChange`, que llama a `setSearch` con el texto nuevo. El estado cambia, React vuelve a ejecutar `App` y la lista se filtra al instante (por eso los resultados se actualizan mientras se escribe).

### `onClick` — varios usos

| Dónde                     | Qué hace                                                        |
| ------------------------- | --------------------------------------------------------------- |
| Botones de género         | `onSelect(genre)` → cambia el estado `genre`                    |
| Botón "Marcar favorito"   | `onToggleFavorite(game.id)` → agrega o quita el id de `favorites` |
| Botón "Ver solo favoritos"| invierte el booleano `showOnlyFavorites`                        |
| Clic en la tarjeta        | `onSelect(game)` → guarda el juego en `selectedGame` y abre el modal |
| Botón ✕ o fondo del modal | `onClose()` → pone `selectedGame` en `null` y cierra el modal   |

Detalle importante: el botón de favorito está **dentro** de la tarjeta, y la tarjeta también tiene `onClick`. Para que marcar un favorito no abra el detalle, se usa `event.stopPropagation()`, que evita que el clic "suba" hasta la tarjeta.

---

## 5. `map()` y `filter()`

### `filter()` — búsqueda, género y favoritos a la vez

```jsx
const filteredGames = games
  .filter((game) => game.name.toLowerCase().includes(search.toLowerCase().trim()))
  .filter((game) => genre === "Todos" || game.genre === genre)
  .filter((game) => !showOnlyFavorites || favorites.includes(game.id));
```

Los tres `filter()` se encadenan: un juego solo se muestra si cumple **los tres** criterios. Por eso la búsqueda y el filtro de género funcionan **simultáneamente**.

`filter()` también se usa para quitar un id del arreglo de favoritos:

```jsx
setFavorites(favorites.filter((favId) => favId !== id));
```

### `map()` — dibujar las tarjetas

```jsx
{filteredGames.map((game) => (
  <GameCard key={game.id} game={game} ... />
))}
```

`map()` recorre el arreglo ya filtrado y devuelve un `GameCard` por cada juego. La prop `key` (el `id` único) le permite a React identificar cada elemento. También se usa `map()` en `GenreFilter` para crear un botón por cada género.

---

## 6. Flujo completo (ejemplo)

1. El usuario escribe "god" en el buscador → `onChange` → `setSearch("god")`.
2. React vuelve a ejecutar `App` → `filteredGames` ahora solo contiene "God of War".
3. `map()` dibuja una sola tarjeta.
4. El usuario pulsa "Marcar favorito" → `onToggleFavorite(4)` → `setFavorites([4])`.
5. El contador muestra `1` y, si activa "Ver solo favoritos", solo se verán los juegos cuyo id esté en `favorites`.
6. El usuario hace clic en la tarjeta → `setSelectedGame(game)` → aparece el modal con el detalle.

---

## 7. Guion sugerido para el video (1 a 2 minutos)

| Tiempo        | Qué mostrar                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| 0:00 – 0:10   | Presentar la página y el catálogo completo (12 tarjetas)                    |
| 0:10 – 0:35   | Escribir en el buscador ("god", "league") y ver cómo se actualiza al instante |
| 0:35 – 1:00   | Cambiar de género y combinar búsqueda + género a la vez                      |
| 1:00 – 1:25   | Marcar 2-3 favoritos, mostrar el contador y activar "Ver solo favoritos"     |
| 1:25 – 1:45   | Abrir el detalle de un juego y cerrarlo                                      |
