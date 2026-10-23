// Props: game (datos), isFavorite (boolean), onToggleFavorite (id) y onSelect (game)
function GameCard({ game, isFavorite, onToggleFavorite, onSelect }) {
  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // evita que el clic también abra el detalle
    onToggleFavorite(game.id);
  };

  return (
    <article
      className="card"
      onClick={() => onSelect(game)}
      onKeyDown={(event) => event.key === "Enter" && onSelect(game)}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalle de ${game.name}`}
    >
      <img src={game.image} alt={`Portada de ${game.name}`} className="card-img" />

      <div className="card-body">
        <h3>{game.name}</h3>
        <div className="card-meta">
          <span className="tag">{game.genre}</span>
          <span className="year">{game.year}</span>
        </div>

        <button
          className={`fav-btn ${isFavorite ? "fav-btn-active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "♥ En favoritos" : "♡ Marcar favorito"}
        </button>
      </div>
    </article>
  );
}

export default GameCard;
