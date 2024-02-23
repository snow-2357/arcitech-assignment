// import { useState } from "react";

import "./App.css";
import BarChartDisplay from "./components/BarChart";
import LineChartDisplay from "./components/LineChart";

import { apiData } from "./data";
function App() {
  return (
    <div>
      <BarChartDisplay data={apiData.category_distribution} />
      <LineChartDisplay data={apiData.response_times.week_wise} />
    </div>
  );
}

export default App;
