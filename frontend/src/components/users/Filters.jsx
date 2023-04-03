import "./Filters.css";
export function Filters() {
  return (
    <div className="filters-container">
      <div className="relevancia-container">
        <div className="relevancia-icon">icon</div>
        <div className="relevancia">Relevancia</div>
      </div>
      <div className="separacion"></div>
      <div className="filter-container">
        <div className="filter-icon">icon</div>
        <div className="filter">Filtrar</div>
      </div>
    </div>
  );
}
