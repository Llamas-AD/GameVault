// Modal con el detalle del juego.
// Props: game, isFavorite, onToggleFavorite y onClose
function GameDetail({ game, isFavorite, onToggleFavorite, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()} // clic dentro del modal no lo cierra
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle de ${game.name}`}
      >
        <button className="modal-close" onClick={onClose} aria-label="Cerrar detalle">
          ✕
        </button>

        <img src={game.image} alt={`Portada de ${game.name}`} className="modal-img" />

        <div className="modal-body">
          <h2>{game.name}</h2>

          <ul className="details">
            <li>
              <strong>Género:</strong> {game.genre}
            </li>
            <li>
              <strong>Año de lanzamiento:</strong> {game.year}
            </li>
            <li>
              <strong>Desarrollador:</strong> {game.developer}
            </li>
            <li>
              <strong>Plataformas:</strong> {game.platforms}
            </li>
          </ul>

          <p className="description">{game.description}</p>

          <button
            className={`fav-btn ${isFavorite ? "fav-btn-active" : ""}`}
            onClick={() => onToggleFavorite(game.id)}
          >
            {isFavorite ? "♥ En favoritos" : "♡ Marcar favorito"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
