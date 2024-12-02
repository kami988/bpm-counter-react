import { useState } from "react";

function BPMCalculator() {
  const [, setTimestamps] = useState<number[]>([]);
  const [bpm, setBpm] = useState<number | null>(null);

  const handleClick = () => {
    const now = performance.now(); // 現在の高精度時間を取得
    setTimestamps((prev) => {
      const updatedTimestamps = [...prev, now];
      if (updatedTimestamps.length > 1) {
        let intervalSum = 0.0;
        // タイムスタンプの間隔を計算
        updatedTimestamps
          .slice(1)
          .forEach((t, i) => (intervalSum += t - updatedTimestamps[i]));
        setBpm(((60 * 1000) / intervalSum) * (updatedTimestamps.length - 1)); // BPMを計算
      }
      return updatedTimestamps;
    });
  };

  const handleReset = () => {
    setTimestamps([]);
    setBpm(null);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">BPM Calculator</h1>
      <button
        onClick={handleClick}
        className="rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
      >
        Tap
      </button>
      <div className="mt-4">
        <p className="text-xl">BPM: {bpm !== null ? bpm : "--"}</p>
      </div>
      <button
        onClick={handleReset}
        className="mt-4 rounded-lg bg-red-500 px-6 py-2 text-white hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
}

export default BPMCalculator;
