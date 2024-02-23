import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggle } from "../redux/categorySlice";

const DropDownComponent: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.categoryOrder.value);

  const [orderset, setOrderset] = useState(order);

  const handleIncreasingToggle = () => {
    if (orderset !== 1) {
      setOrderset(1);
      dispatch(toggle());
    }
  };

  const handleDecreasingToggle = () => {
    if (orderset !== -1) {
      setOrderset(-1);
      dispatch(toggle());
    }
  };

  return (
    <div className="">
      <div className="flex items-center">
        <input
          checked={orderset === 1}
          onChange={handleIncreasingToggle}
          id="Increasing-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="Increasing-checkbox"
          className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Increasing order
        </label>
        <input
          checked={orderset === -1}
          onChange={handleDecreasingToggle}
          id="Decreasing-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="Decreasing-checkbox"
          className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Decreasing order
        </label>
      </div>
    </div>
  );
};

export default DropDownComponent;
