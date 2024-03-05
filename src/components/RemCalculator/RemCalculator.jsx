import React, { useState } from 'react';
import './RemCalculator.scss';
import classNames from 'classnames';

export const RemCalculator = () => {
  const [pixelValue, setPixelValue] = useState(0);
  const [fullWidth, setFullWidth] = useState(0);

  const handleChangeValue = (value) => {
    setFullWidth(value);
  };

  function calculatePercentage(width, pixelsCount) {
    const percentage = (pixelsCount / width) * 100;
    return percentage;
  }

  function calculateRem(px) {
    return px / 16;
  }

  return (
    <div className="calculator">
      <label>
        px:
        <input onChange={(e) => setPixelValue(e.target.value)} />
      </label>

      <div className="calculator__values">
        <div
          className={classNames(fullWidth === 1920 && 'bold')}
          onClick={() => handleChangeValue(1920)}
        >
          1920
        </div>

        <div
          onClick={() => handleChangeValue(1080)}
          className={classNames(fullWidth === 1080 && 'bold')}
        >
          1080
        </div>
      </div>

      <div className="calculator__result">
        percentage: {calculatePercentage(fullWidth, pixelValue)} %
      </div>

      <div className="calculator__rem">REM: {calculateRem(pixelValue)}</div>
    </div>
  );
};
