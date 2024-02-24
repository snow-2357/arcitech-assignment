// import { useState } from "react";

import "./App.css";
import BarChartWrapper from "./components/BarChartWrapper";
import PieChartDisplay from "./components/Charts/PieChart";
import LineChartWrapper from "./components/LineChartWrapper";
import ThemeToggle from "./components/ThemeToggle";

import { apiData } from "./data";
function App() {
  return (
    <div className=" h-auto bg-gray-100 dark:bg-gray-700 flex flex-col gap-4 items-center ">
      <ThemeToggle />
      <BarChartWrapper />
      <LineChartWrapper />
      <PieChartDisplay data={apiData.user_satisfaction.ratings} />
    </div>
  );
}

export default App;
