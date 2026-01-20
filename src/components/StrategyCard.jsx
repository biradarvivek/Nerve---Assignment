const StrategyCard = ({ name, count }) => {
  return (
    <div className="strategy-card">
      <span className="left-text">{name}</span>
      <span className="right-text">
        + {count} {count === 1 ? "Strategy" : "Strategies"}
      </span>
    </div>
  );
};

export default StrategyCard;
