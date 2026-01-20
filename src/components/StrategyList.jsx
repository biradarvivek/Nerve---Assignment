import StrategyCard from "./StrategyCard";
import EmptyState from "./EmptyState";

const StrategyList = ({ data, date }) => {
  if (!Object.keys(data).length) {
    return <EmptyState date={date} />;
  }

  return (
    <>
      {Object.entries(data).map(([name, count]) => (
        <StrategyCard key={name} name={name} count={count} />
      ))}
    </>
  );
};

export default StrategyList;
