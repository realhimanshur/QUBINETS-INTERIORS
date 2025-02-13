import React, { useState } from 'react';
import Phase1 from './Phase1'
import Phase2 from './Phase2'
import Phase3 from './Phase3'
import Result from './Result'
import './CalculatorApp.css';

const Calculator = () => {
  const [phase, setPhase] = useState(1);
  const [inputs, setInputs] = useState({
    bhk: '',
    rooms: [],
    package: '',
  });
  const [result, setResult] = useState(null);

  const nextPhase = () => {
    if (phase === 1 && !inputs.bhk) return alert('Please select the type of apartment.');
    if (phase === 2 && inputs.rooms.length === 0) return alert('Please select at least one room.');
    setPhase(phase + 1);
  };

  const previousPhase = () => setPhase(phase - 1);

  const handleInputChange = (input) => {
    setInputs({ ...inputs, ...input });
  };

  const calculateCost = () => {
    if (!inputs.package) return alert('Please select a package type.');

    let baseCost = 50000;
    if (inputs.bhk === '2BHK') baseCost = 100000;
    if (inputs.bhk === '3BHK') baseCost = 150000;
    if (inputs.bhk === '4BHK+') baseCost = 200000;

    const roomCost = inputs.rooms.length * 10000;
    let packageMultiplier = 1;

    if (inputs.package === 'Premium') packageMultiplier = 1.5;
    if (inputs.package === 'Luxury') packageMultiplier = 2;

    const totalCost = (baseCost + roomCost) * packageMultiplier;
    setResult(totalCost);
  };

  const resetCalculator = () => {
    setPhase(1);
    setInputs({
      bhk: '',
      rooms: [],
      package: '',
    });
    setResult(null);
  };

  return (
    <div className="App">
      <h1>Interior Design Cost Estimator</h1>
      {phase === 1 && <Phase1 nextPhase={nextPhase} handleInputChange={handleInputChange} />}
      {phase === 2 && <Phase2 nextPhase={nextPhase} previousPhase={previousPhase} handleInputChange={handleInputChange} />}
      {phase === 3 && <Phase3 calculateCost={calculateCost} previousPhase={previousPhase} handleInputChange={handleInputChange} />}
      {result && <Result cost={result} resetCalculator={resetCalculator} />}
    </div>
  );
};

export default Calculator;
