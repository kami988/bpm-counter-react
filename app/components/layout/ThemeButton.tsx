"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger>
        {theme === "dark" ? (
          <Moon className="text-white" />
        ) : theme === "light" ? (
          <Sun className="text-black" />
        ) : (
          <Monitor className="text-black dark:text-white" />
        )}
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col p-2 gap-2">
          <button className="" onClick={() => setTheme("light")}>
            <Sun
              className={`${
                theme === "light" ? "text-black" : "text-gray-500"
              }`}
            />
          </button>
          <button onClick={() => setTheme("system")}>
            <Monitor
              className={`${
                theme === "system"
                  ? "text-black dark:text-white"
                  : "text-gray-500"
              }`}
            />
          </button>
          <button onClick={() => setTheme("dark")}>
            <Moon
              className={`${theme === "dark" ? "text-white" : "text-gray-500"}`}
            />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeButton;
