import React from 'react';
import './checkbox-input.scss';

const CheckboxInput = ({ value }) => {
  return (
    <div className="checkbox-input-container">
      <input className="checkbox-input" id={`checkbox-input-${value}`} type="checkbox" name={value} value={value} />
      <label className="checkbox-input-label" for={`checkbox-input-${value}`}>
        <div className="checkbox-input-clickbox" />
        {value}
      </label>
    </div>
  );
}

export default CheckboxInput;
