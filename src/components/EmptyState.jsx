const EmptyState = ({ date }) => {
  return (
    <div className="empty-state">
      There are no strategies for
      <br />
      <strong className="date">{date}</strong>
    </div>
  );
};

export default EmptyState;
