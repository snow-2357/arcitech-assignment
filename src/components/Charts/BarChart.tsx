import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { RootState } from "../../redux/store";

interface BarChartProps {
  data: { [key: string]: number };
}

const BarChartDisplay: React.FC<BarChartProps> = ({ data }) => {
  const order = useSelector((state: RootState) => state.categoryOrder.value);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const [sortedChartData, setSortedChartData] = useState<
    { name: string; value: number }[]
  >([]);

  useEffect(() => {
    const chartData = Object.entries(data).map(([category, value]) => ({
      name: category,
      value: value,
    }));

    if (order === 1)
      setSortedChartData([...chartData].sort((a, b) => a.value - b.value));
    else if (order === -1)
      setSortedChartData([...chartData].sort((a, b) => b.value - a.value));
    else
      setSortedChartData(
        [...chartData].sort((a, b) => a.name.localeCompare(b.name))
      );
  }, [order, data]);
  // For sorting the data based on the user input:
  // 1 for increasing, -1 for decreasing, and 0 for sorting alphabetically.

  return (
    <BarChart width={600} height={300} data={sortedChartData}>
      <XAxis dataKey="name" className="text-sm" />
      <YAxis />
      <Tooltip
        wrapperStyle={{ backgroundColor: "#000" }}
        formatter={(value: number) => [`${value} units`, ""]}
      />
      <CartesianGrid stroke="#FF512C" strokeDasharray="5 5" />
      <Bar
        dataKey="value"
        barSize={30}
        fill={theme !== "dark" ? "#98817C" : "#98817C"}
      />
    </BarChart>
  );
};

export default BarChartDisplay;
