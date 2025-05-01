import React from "react";

interface TapButtonProps {
  onTap: () => void;
  isActive: boolean;
}

const TapButton = ({ onTap, isActive }: TapButtonProps) => {
  return (
    <div className="w-full h-25">
      <button
        onClick={(e) => {
          e.preventDefault();
          onTap();
        }}
        className={`w-full h-full rounded-lg text-white font-medium text-lg transition-all duration-200 flex items-center justify-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700
          ${
            isActive
              ? "bg-blue-600 shadow-lg transform scale-[0.98]"
              : "shadow-md hover:shadow-lg"
          }`}
        aria-label="Tap to calculate BPM"
      >
        <div className="flex flex-col items-center">
          <span className="text-xl">Tap</span>
        </div>
      </button>
    </div>
  );
};

export default TapButton;
