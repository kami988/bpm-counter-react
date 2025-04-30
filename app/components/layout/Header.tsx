"use client";

import React from "react";
import { Monitor, Moon, Music2, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <header className="shadow-sm border-b">
      <div className="max-w-7xl gap-2 mx-auto px-4 py-4 sm:px-6 flex items-center">
        <Music2 className="h-8 w-8 text-blue-500 mr-2" />
        <h1 className="text-xl font-semibold text-accent-foreground">
          BPM Calculator
        </h1>
        <button className="ml-auto flex-end" onClick={() => setTheme("light")}>
          <Sun
            className={`${theme === "light" ? "text-black" : "text-gray-500"}`}
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
    </header>
  );
};

export default Header;
