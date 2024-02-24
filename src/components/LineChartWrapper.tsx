import { useEffect, useState } from "react";
import { apiData } from "../data";
import LineChartDisplay from "./Charts/LineChart";
import LineFilter from "./LineFilter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface DayWiseData {
  date: string;
  average_time: number;
}
interface WeekWiseData {
  week: string;
  average_time: number;
}
type Data = DayWiseData[] | WeekWiseData[];

export default function LineChartWrapper() {
  const [data, setData] = useState<Data | undefined>();

  const timePeriod = useSelector((state: RootState) => state.timePeriod.value);

  useEffect(() => {
    if (timePeriod === 1) {
      setData(apiData.response_times.week_wise as Data);
    } else {
      setData(apiData.response_times.day_wise as Data);
    }
  }, [timePeriod]);
  // Fetch data based on the selected time period

  return (
    <>
      <LineFilter />
      {data && (
        <LineChartDisplay
          data={data}
          xAxisKey={timePeriod === 1 ? "week" : "date"}
        />
      )}
    </>
  );
}
