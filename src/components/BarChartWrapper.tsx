import { apiData } from "../data";
import BarFilter from "./BarFilter";
import BarChartDisplay from "./Charts/BarChart";

export default function BarChartWrapper() {
  return (
    <>
      <BarFilter />
      <BarChartDisplay data={apiData.category_distribution} />
    </>
  );
}
