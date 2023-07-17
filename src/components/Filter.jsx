import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <label className="filter">
      Filter contacts by name:
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="filter__input"
        style={{ marginTop: '10px' }}
      />
    </label>
  );
};

export default Filter;
