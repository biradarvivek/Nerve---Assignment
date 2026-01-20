import { useState, useMemo } from "react";
import "./App.css";

import Header from "./components/Header";
import ToggleButtons from "./components/ToggleButtons";
import DateDropdown from "./components/DateDropdown";
import StrategyList from "./components/StrategyList";

import { dateArray, strategyArray } from "./data/data";
import {
  getStrategiesByViewAndDate,
  getStrategyCountMap,
} from "./utils/strategyUtils";

function App() {
  const [view, setView] = useState("Bullish");
  const [date, setDate] = useState(dateArray[0]);

  const strategies = useMemo(
    () => getStrategiesByViewAndDate(strategyArray, view, date),
    [view, date],
  );

  const counted = useMemo(() => getStrategyCountMap(strategies), [strategies]);

  return (
    <div className="app">
      <Header />

      <ToggleButtons selectedView={view} onChange={setView} />

      <DateDropdown dates={dateArray} selectedDate={date} onChange={setDate} />

      <StrategyList data={counted} date={date} />
    </div>
  );
}

export default App;
