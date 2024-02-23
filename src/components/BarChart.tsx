import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface BarChartProps {
  data: { [key: string]: number };
}

const BarChartDisplay: React.FC<BarChartProps> = ({ data }) => {
  const chartData = Object.entries(data).map(([category, value]) => ({
    name: category,
    value: value,
  }));
  return (
    <BarChart width={600} height={300} data={chartData}>
      <XAxis dataKey="name" stroke="#000" />
      <YAxis />
      <Tooltip
        wrapperStyle={{ backgroundColor: "#ccc" }}
        formatter={(value: number) => [`${value} units`, ""]}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="value" barSize={30} className="bg-black" />
    </BarChart>
  );
};

export default BarChartDisplay;
