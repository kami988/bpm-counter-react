import React from "react";
import { Music2 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex items-center">
        <Music2 className="h-8 w-8 text-blue-500 mr-2" />
        <h1 className="text-xl font-semibold text-gray-800">BPM Calculator</h1>
      </div>
    </header>
  );
};

export default Header;
