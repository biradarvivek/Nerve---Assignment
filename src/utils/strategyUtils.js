export const getStrategiesByViewAndDate = (
  strategyArray,
  selectedView,
  selectedDate,
) => {
  const viewData = strategyArray.find((item) => item.View === selectedView);

  return viewData?.Value?.[selectedDate] || [];
};

export const getStrategyCountMap = (strategies = []) => {
  return strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});
};
