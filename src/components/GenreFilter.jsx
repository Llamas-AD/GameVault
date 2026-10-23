// Props: genres (lista de géneros), selected (género activo) y onSelect (cambia el género)
function GenreFilter({ genres, selected, onSelect }) {
  return (
    <div className="genres">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`chip ${selected === genre ? "chip-active" : ""}`}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
