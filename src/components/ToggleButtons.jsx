const views = ["Bullish", "Bearish", "Rangebound", "Volatile"];

const ToggleButtons = ({ selectedView, onChange }) => {
  return (
    <div className="toggle-container">
      {views.map((view) => (
        <button
          key={view}
          className={`toggle-btn ${selectedView === view ? "active" : ""}`}
          onClick={() => onChange(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtons;
