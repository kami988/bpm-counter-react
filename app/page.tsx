"use client";

import React, { useState } from "react";
import BpmCalculator from "./components/BpmCalculator";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AddCalculatorButton from "./components/AddCalculatorButton";

function App() {
  const [calculators, setCalculators] = useState<number[]>([0]);

  const addCalculator = () => {
    setCalculators((prev) => [...prev, prev.slice(-1)[0] + 1]);
  };

  const removeCalculator = (id: number) => {
    setCalculators((prev) => prev.filter((calcId) => calcId !== id));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow p-4 space-y-6">
        {calculators.map((id) => (
          <BpmCalculator
            key={id}
            onRemove={() => removeCalculator(id)}
            showRemove={calculators.length > 1}
            isOnly={calculators.length === 1}
          />
        ))}

        <div className="flex justify-center">
          <AddCalculatorButton onClick={addCalculator} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
