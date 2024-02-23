import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { daily, week } from "../redux/timePeriodSlice";

const LineFilter: React.FC = () => {
  const dispatch = useDispatch();
  const timePeriod = useSelector((state: RootState) => state.timePeriod.value);
  const [timePeriodValue, setTimePeriodValue] = useState(timePeriod);

  const handleWeekToggle = () => {
    setTimePeriodValue(1);
    dispatch(week());
  };

  const handleDailyToggle = () => {
    setTimePeriodValue(-1);
    dispatch(daily());
  };

  return (
    <div className="">
      <div className="flex items-center gap-4 mb-4 mx-12">
        <input
          checked={timePeriodValue === 1}
          onChange={handleWeekToggle}
          id="Week-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="Week-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Week
        </label>
        <input
          checked={timePeriodValue === -1}
          onChange={handleDailyToggle}
          id="Daily-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="Daily-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Daily
        </label>
      </div>
    </div>
  );
};

export default LineFilter;
