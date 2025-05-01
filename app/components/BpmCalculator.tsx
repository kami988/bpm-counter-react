"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import TapButton from "./TapButton";
import BpmDisplay from "./BpmDisplay";
import NumberLine from "./NumberLine";
import { calculateBPM, calculateInstantBPM } from "../libs/bpmUtils";
import { RefreshCcw, X } from "lucide-react";

interface BpmCalculatorProps {
  onRemove: () => void;
  showRemove: boolean;
  isOnly: boolean;
}

const BpmCalculator = ({
  onRemove,
  showRemove,
  isOnly,
}: BpmCalculatorProps) => {
  const [tappedAt, setTappedAt] = useState<number | null>(null);
  const [tapIntervals, setTapIntervals] = useState<number[]>([]);
  const [bpm, setBpm] = useState<number | null>(null);
  const [bpmHistory, setBpmHistory] = useState<number[]>([]);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);

  const handleFocus = useCallback(() => {
    if (!isOnly) containerRef.current?.focus();
    setActiveElement(document.activeElement as HTMLElement | null);
  }, [isOnly]);

  const handleBlur = useCallback(() => {
    containerRef.current?.blur();
    setActiveElement(null);
  }, []);

  const handleTap = useCallback(() => {
    const now = performance.now();
    if (tappedAt !== null) {
      const interval = now - tappedAt;
      setTapIntervals((prev) => [...prev, interval]);
    } else {
      setBpm(0);
    }
    setTappedAt(now);
    setIsActive(true);
  }, [tappedAt]);

  useEffect(() => {
    if (tapIntervals.length >= 1) {
      setBpm(calculateBPM(tapIntervals));
      setBpmHistory((prev) => {
        return [...prev, calculateInstantBPM(tapIntervals)];
      });
    }
  }, [tapIntervals]);

  const handleReset = useCallback(() => {
    setTappedAt(null);
    setTapIntervals([]);
    setBpm(null);
    setBpmHistory([]);
    setIsActive(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOnly || containerRef.current?.contains(activeElement)) {
        switch (event.code) {
          case "Space":
            event.preventDefault();
            handleTap();
            break;
          case "KeyR":
            event.preventDefault();
            handleReset();
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleTap, isOnly, containerRef, activeElement, handleReset]);

  return (
    <div
      className={`w-full max-w-lg mx-auto ring-offset-background border bg-background rounded-xl shadow-md overflow-hidden p-6 relative ${
        isOnly ? "" : "focus:ring-blue-300 focus:ring-2"
      }`}
      ref={containerRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      {showRemove && (
        <button
          onClick={onRemove}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Remove calculator"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      <div className="flex flex-col items-center space-y-8">
        <BpmDisplay bpm={bpm} />

        <div className="w-full">
          <NumberLine bpmHistory={bpmHistory} />
        </div>

        <div className="flex flex-col items-center space-y-4 w-full">
          <TapButton onTap={handleTap} isActive={isActive} />

          <button
            onClick={handleReset}
            className="flex items-center px-4 py-2 text-sm rounded-lg text-secondary-foreground hover:bg-secondary transition-colors"
            aria-label="Reset"
          >
            <RefreshCcw className="h-4 w-4 mr-1" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default BpmCalculator;
