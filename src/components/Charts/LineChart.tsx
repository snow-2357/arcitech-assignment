import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RootState } from "../../redux/store";

interface DayWiseData {
  date: string;
  average_time: number;
}

interface WeekWiseData {
  week: string;
  average_time: number;
}
type LineChartProps = {
  data: DayWiseData[] | WeekWiseData[];
  xAxisKey: string;
};

const LineChartDisplay: React.FC<LineChartProps> = ({ data, xAxisKey }) => {
  const formatXAxis = (value: string) => {
    if (xAxisKey === "date") {
      const dateParts = value.split("-");
      if (dateParts.length === 3) {
        return `${dateParts[1]}-${dateParts[2]}`; // Extract month and day
      }
    }
    return value;
  };
  // 2023-10-19 is toolong so i split the year

  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey={xAxisKey} tickFormatter={formatXAxis} />
      <YAxis />
      <CartesianGrid stroke="#FF512C" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="average_time"
        name="Avg Response Time"
        stroke={theme !== "dark" ? "#98817C" : "#98817C"}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default LineChartDisplay;
