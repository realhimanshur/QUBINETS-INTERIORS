import React, { useState } from 'react';

const Phase2 = ({ nextPhase, previousPhase, handleInputChange }) => {
  const [rooms, setRooms] = useState([]);

  const handleRoomChange = (room) => {
    setRooms((prevRooms) =>
      prevRooms.includes(room)
        ? prevRooms.filter((r) => r !== room)
        : [...prevRooms, room]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputChange({ rooms });
    nextPhase();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Rooms to Design</h2>
      <label>
        <input type="checkbox" value="Living Room" onChange={(e) => handleRoomChange(e.target.value)} />
        Living Room
      </label>
      <label>
        <input type="checkbox" value="Bedroom" onChange={(e) => handleRoomChange(e.target.value)} />
        Bedroom
      </label>
      <label>
        <input type="checkbox" value="Kitchen" onChange={(e) => handleRoomChange(e.target.value)} />
        Kitchen
      </label>
      <label>
        <input type="checkbox" value="Bathroom" onChange={(e) => handleRoomChange(e.target.value)} />
        Bathroom
      </label>
      <label>
        <input type="checkbox" value="Dining Room" onChange={(e) => handleRoomChange(e.target.value)} />
        Dining Room
      </label>
      <button type="button" onClick={previousPhase}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Phase2;
