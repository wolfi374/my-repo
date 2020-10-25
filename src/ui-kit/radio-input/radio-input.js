import React from 'react';
import './radio-input.scss';

const RadioInput = ({ text, value, name }) => {
  return (
    <div className="radio-input-container">
      <input className="radio-input" id={`radio-input-${value}`} type="radio" name={name} value={value} />
      <label className="radio-input-label" htmlFor={`radio-input-${value}`}>
        <div className="radio-input-clickbox" />
        {text}
      </label>
    </div>
  );
}

export default RadioInput;
