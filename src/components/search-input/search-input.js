import React from 'react';
import './search-input.scss';

const SearchInput = () => {
  return (
    <div className="search-input-container">
      <input
        className="search-input"
        placeholder="Начните вводить ..."
      />
      <div className="search-icon" />
    </div>
  );
}

export default SearchInput;
