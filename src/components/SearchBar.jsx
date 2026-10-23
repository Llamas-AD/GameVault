// Props: value (texto actual) y onChange (función que actualiza el estado en App)
function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="search"
      placeholder="Buscar videojuego por nombre..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default SearchBar;
