import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTheme } from "../redux/themeSlice";

const ThemeToggle: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      document.documentElement.classList.remove("dark");
      //cleanup
    };
  }, [theme]);

  return (
    <div className="flex w-full items-center justify-end">
      <button className="my-4 mx-8" onClick={handleToggleTheme}>
        {theme === "light" ? "Dark " : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
