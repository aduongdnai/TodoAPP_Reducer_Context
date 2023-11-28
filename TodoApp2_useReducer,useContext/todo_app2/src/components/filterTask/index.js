import React from 'react';

const FilterTask = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter tasks by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterTask;