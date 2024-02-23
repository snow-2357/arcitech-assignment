// import { useState } from "react";

import "./App.css";
import BarChartDisplay from "./components/BarChart";
import LineChartDisplay from "./components/LineChart";
import PieChartDisplay from "./components/PieChart";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./redux/categorySlice";
import { RootState } from "./redux/store";

import { apiData } from "./data";
function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>order: {count}</p>
        <button onClick={() => dispatch(toggle())}>toggle</button>
      </div>
      <BarChartDisplay data={apiData.category_distribution} />
      <LineChartDisplay data={apiData.response_times.week_wise} />
      <PieChartDisplay data={apiData.user_satisfaction.ratings} />
    </div>
  );
}

export default App;
