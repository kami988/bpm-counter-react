"use client";

import React from "react";

interface NumberLineProps {
  bpmHistory: number[];
}

const NumberLine = ({ bpmHistory }: NumberLineProps) => {
  const minBpm = 0;
  const maxBpm = 320;
  const markers = [0, 40, 80, 120, 160, 200, 240, 280, 320];

  const getBpmPosition = (value: number) => {
    const clampedBpm = Math.max(minBpm, Math.min(maxBpm, value));
    return ((clampedBpm - minBpm) / (maxBpm - minBpm)) * 100;
  };

  return (
    <div className="w-full pt-4">
      <div className="relative w-full h-12">
        {/* Main line */}
        <div className="absolute w-full h-1 bg-gray-200 top-5"></div>

        {/* Historical points */}
        {bpmHistory.slice(0, -1).map((historicalBpm, index) => {
          const position = getBpmPosition(historicalBpm);
          const opacity = ((index + 1) / bpmHistory.length) * 0.5;
          return (
            <div
              key={`history-${index}`}
              className="absolute w-3 h-3 rounded-full bg-indigo-500 border border-white"
              style={{
                left: `${position}%`,
                top: "1.375rem",
                transform: "translate(-50%, -50%)",
                opacity,
                zIndex: index,
              }}
            />
          );
        })}

        {/* Markers */}
        {markers.map((marker) => {
          const position = ((marker - minBpm) / (maxBpm - minBpm)) * 100;
          return (
            <React.Fragment key={marker}>
              <div
                className="absolute w-0.5 h-3 bg-gray-400"
                style={{ left: `${position}%`, top: "1rem" }}
              ></div>
              <div
                className="absolute text-xs text-gray-500"
                style={{
                  left: `${position}%`,
                  top: "2rem",
                  transform: "translateX(-50%)",
                }}
              >
                {marker}
              </div>
            </React.Fragment>
          );
        })}

        {/* Current BPM Indicator */}
        {bpmHistory.length > 0 && (
          <div
            className="absolute w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow-md transition-all duration-500 ease-out"
            style={{
              left: `${getBpmPosition(bpmHistory.slice(-1)[0])}%`,
              top: "1.375rem",
              transform: "translate(-50%, -50%)",
              zIndex: bpmHistory.length + 1,
            }}
          >
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              {bpmHistory.slice(-1)[0].toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberLine;
