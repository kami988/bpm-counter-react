"use client";

import React from "react";

interface BpmDisplayProps {
  bpm: number | null;
}

const BpmDisplay = ({ bpm }: BpmDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-foreground font-medium mb-1">BPM</h2>
      <div
        className={
          "text-5xl font-bold transition-all duration-300 text-foreground"
        }
      >
        {bpm !== null ? bpm.toFixed(2) : "-"}
      </div>
    </div>
  );
};

export default BpmDisplay;
