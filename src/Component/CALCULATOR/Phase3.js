import React, { useState } from 'react';

const Phase3 = ({ calculateCost, previousPhase, handleInputChange }) => {
  const [packageType, setPackageType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputChange({ package: packageType });
    calculateCost();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Package</h2>
      <select value={packageType} onChange={(e) => setPackageType(e.target.value)} required>
        <option value="" disabled>Select Package</option>
        <option value="Standard">Standard</option>
        <option value="Premium">Premium</option>
        <option value="Luxury">Luxury</option>
      </select>
      <button type="button" onClick={previousPhase}>Back</button>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default Phase3;
