// import { useState } from "react";

import "./App.css";
import BarChartDisplay from "./components/BarChat";

import { apiData } from "./data";
function App() {
  return (
    <div>
      <BarChartDisplay data={apiData.category_distribution} />
    </div>
  );
}

export default App;
