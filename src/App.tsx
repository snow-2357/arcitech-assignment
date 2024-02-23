// import { useState } from "react";

import "./App.css";
import BarChartWrapper from "./components/BarChartWrapper";
import LineChartDisplay from "./components/Charts/LineChart";
import PieChartDisplay from "./components/Charts/PieChart";

import { apiData } from "./data";
function App() {
  return (
    <div>
      <BarChartWrapper />
      <LineChartDisplay data={apiData.response_times.week_wise} />
      <PieChartDisplay data={apiData.user_satisfaction.ratings} />
    </div>
  );
}

export default App;
