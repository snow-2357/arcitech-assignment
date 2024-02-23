import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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
};

const LineChartDisplay: React.FC<LineChartProps> = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="average_time"
        name="Average Response Time"
        stroke="#000"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default LineChartDisplay;
