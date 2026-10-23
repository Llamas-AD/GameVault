import { useState } from "react";
import games from "./data/games";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import GameCard from "./components/GameCard";
import GameDetail from "./components/GameDetail";

// Lista de géneros generada a partir de los datos (sin repetidos) + opción "Todos"
const GENRES = ["Todos", ...new Set(games.map((game) => game.genre))];

function App() {
  // ----- ESTADO (useState) -----
  const [search, setSearch] = useState(""); // texto del buscador
  const [genre, setGenre] = useState("Todos"); // género seleccionado
  const [favorites, setFavorites] = useState([]); // ids de los favoritos
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null); // juego abierto en el detalle

  // ----- EVENTOS -----
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      // desmarcar: lo quitamos del arreglo con filter()
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      // marcar: creamos un arreglo nuevo con el id agregado
      setFavorites([...favorites, id]);
    }
  };

  // ----- BÚSQUEDA + FILTRO + FAVORITOS (todo con filter()) -----
  const filteredGames = games
    .filter((game) => game.name.toLowerCase().includes(search.toLowerCase().trim()))
    .filter((game) => genre === "Todos" || game.genre === genre)
    .filter((game) => !showOnlyFavorites || favorites.includes(game.id));

  return (
    <div className="app">
      <header className="header">
        <h1>
          Game<span>Vault</span>
        </h1>
        <p>Explora el catálogo, busca por nombre y guarda tus favoritos.</p>
      </header>

      <section className="toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <GenreFilter genres={GENRES} selected={genre} onSelect={setGenre} />

        <div className="favorites-bar">
          <span className="favorites-count">
            ♥ Favoritos: <strong>{favorites.length}</strong>
          </span>
          <button
            className={`btn ${showOnlyFavorites ? "btn-active" : ""}`}
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          >
            {showOnlyFavorites ? "Ver todos" : "Ver solo favoritos"}
          </button>
        </div>
      </section>

      <p className="results-info">
        Mostrando {filteredGames.length} de {games.length} videojuegos
      </p>

      {filteredGames.length > 0 ? (
        <main className="grid">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavorite={favorites.includes(game.id)}
              onToggleFavorite={toggleFavorite}
              onSelect={setSelectedGame}
            />
          ))}
        </main>
      ) : (
        <p className="empty">
          No se encontraron videojuegos con esos filtros. Prueba con otro nombre o género.
        </p>
      )}

      {selectedGame && (
        <GameDetail
          game={selectedGame}
          isFavorite={favorites.includes(selectedGame.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
}

export default App;
