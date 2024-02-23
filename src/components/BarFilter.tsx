import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { increase, decrees, serial } from "../redux/categorySlice";

const BarFilter: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.categoryOrder.value);

  const [orderValue, setOrderValue] = useState(order);

  const handleIncreasingToggle = () => {
    setOrderValue(1);
    dispatch(increase());
  };

  const handleDecreasingToggle = () => {
    setOrderValue(-1);
    dispatch(decrees());
  };
  const handleSerialToggle = () => {
    setOrderValue(0);
    dispatch(serial());
  };

  return (
    <div className="">
      {order}
      <div className="flex items-center gap-4 mb-4 mx-12">
        <input
          checked={orderValue === 1}
          onChange={handleIncreasingToggle}
          id="Increasing-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="Increasing-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Increasing order
        </label>
        <input
          checked={orderValue === -1}
          onChange={handleDecreasingToggle}
          id="Decreasing-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="Decreasing-checkbox"
          className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Decreasing order
        </label>
        <input
          checked={orderValue === 0}
          onChange={handleSerialToggle}
          id="Increasing-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="Increasing-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Serial
        </label>
      </div>
    </div>
  );
};

export default BarFilter;
