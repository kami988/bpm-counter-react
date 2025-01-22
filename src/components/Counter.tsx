import { useState } from "react";
import { flex } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

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
      } else {
        setBpm(0);
      }
      return updatedTimestamps;
    });
  };

  const handleReset = () => {
    setTimestamps([]);
    setBpm(null);
  };

  return (
    <div
      className={flex({
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2xl",
        fontWeight: "bold",
        background: "gray.200",
        padding: "2rem",
        gap: "2rem",
        borderRadius: "md",
      })}
    >
      <div className={flex({ gap: "0.5rem" })}>
        <p>BPM: </p>
        <span className={flex({ justifyContent: "center", width: "5rem" })}>
          {bpm !== null ? bpm.toFixed(2) : "-"}
        </span>
      </div>
      <button
        className={css({
          padding: "1rem",
          fontSize: "2xl",
          fontWeight: "bold",
          background: "blue.500",
          color: "white",
          borderRadius: "md",
          cursor: "pointer",
        })}
        onClick={handleClick}
      >
        Tap
      </button>
      <button
        className={css({
          padding: "0.5rem",
          fontSize: "1xl",
          fontWeight: "bold",
          background: "red.500",
          color: "white",
          borderRadius: "md",
          cursor: "pointer",
        })}
        onClick={handleReset}
      >
        🔃
      </button>
    </div>
  );
}

export default BPMCalculator;
