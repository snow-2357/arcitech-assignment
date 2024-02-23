// import { useState } from "react";

import "./App.css";
import BarChartDisplay from "./components/BarChart";
import BarFilter from "./components/BarFilter";
import LineChartDisplay from "./components/LineChart";
import PieChartDisplay from "./components/PieChart";
// import { useSelector, useDispatch } from "react-redux";
// import { toggle } from "./redux/categorySlice";
// import { RootState } from "./redux/store";

import { apiData } from "./data";
function App() {
  // const count = useSelector((state: RootState) => state.categoryOrder.value);
  // const dispatch = useDispatch();
  return (
    <div>
      <BarFilter />
      <BarChartDisplay data={apiData.category_distribution} />

      <LineChartDisplay data={apiData.response_times.week_wise} />
      <PieChartDisplay data={apiData.user_satisfaction.ratings} />
    </div>
  );
}

export default App;
