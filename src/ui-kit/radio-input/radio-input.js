import React from 'react';
import './radio-input.scss';

const RadioInput = ({ text, value, name, checked, onChange }) => {
  const onChangeHandler = (evt) => {
    if (onChange) onChange(evt.target.value);
  }

  return (
    <div className="radio-input-container">
      <input
        className="radio-input"
        id={`radio-input-${value}`}
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={onChangeHandler}
      />
      <label className="radio-input-label" htmlFor={`radio-input-${value}`}>
        <div className="radio-input-clickbox" />
        {text}
      </label>
    </div>
  );
}

export default RadioInput;
