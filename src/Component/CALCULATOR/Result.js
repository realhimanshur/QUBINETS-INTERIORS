import React from 'react';

const Result = ({ cost, resetCalculator }) => {
  return (
    <div>
      <h2>Estimated Cost</h2>
      <p>The estimated cost for your interior design is: {cost} currency units</p>
      <button onClick={resetCalculator}>Start Over</button>
    </div>
  );
};

export default Result;
