// import { useState } from "react";

import "./App.css";
import BarChartWrapper from "./components/BarChartWrapper";
import PieChartDisplay from "./components/Charts/PieChart";
import LineChartWrapper from "./components/LineChartWrapper";

import { apiData } from "./data";
function App() {
  return (
    <div>
      <BarChartWrapper />
      <LineChartWrapper />
      <PieChartDisplay data={apiData.user_satisfaction.ratings} />
    </div>
  );
}

export default App;
