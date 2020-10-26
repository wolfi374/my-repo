import React from 'react';
import './search-input.scss';

const SearchInput = ({ onChange }) => {
  const onChangeHandler = (evt) => {
    if (onChange) onChange(evt.target.value);
  }

  return (
    <div className="search-input-container">
      <input
        className="search-input"
        placeholder="Начните вводить ..."
        onChange={onChangeHandler}
      />
      <div className="search-icon" />
    </div>
  );
}

export default SearchInput;
