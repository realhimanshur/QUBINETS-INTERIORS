import React, { useState } from 'react';

const Phase1 = ({ nextPhase, handleInputChange }) => {
  const [bhk, setBhk] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputChange({ bhk });
    nextPhase();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select BHK</h2>
      <select value={bhk} onChange={(e) => setBhk(e.target.value)} required>
        <option value="" disabled>Select BHK</option>
        <option value="1BHK">1 BHK</option>
        <option value="2BHK">2 BHK</option>
        <option value="3BHK">3 BHK</option>
        <option value="4BHK">4 BHK+</option>
        <option value="5BHK">5 BHK+</option>
      </select>
      <button type="submit">Next</button>
    </form>
  );
};

export default Phase1;
