// import { useState } from "react";

import "./App.css";
import BarChartWrapper from "./components/BarChartWrapper";
import PieChartDisplay from "./components/Charts/PieChart";
import LineChartWrapper from "./components/LineChartWrapper";
import ThemeToggle from "./components/ThemeToggle";

import { apiData } from "./data";
function App() {
  return (
    <div className="w-screen h-auto bg-gray-100 dark:bg-gray-700 flex flex-col gap-4 items-center overflow-x-hidden">
      <ThemeToggle />
      <BarChartWrapper />
      <LineChartWrapper />
      <PieChartDisplay data={apiData.user_satisfaction.ratings} />
    </div>
  );
}

export default App;
