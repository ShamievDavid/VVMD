import React, { useState } from 'react';
import './RemCalculator.scss';

export const RemCalculator = () => {
  const [pixelValue, setPixelValue] = useState(null);
  const [fullWidth, setFullWidth] = useState(null);

  function calculatePercentage(width, pixelsCount) {
    const percentage = (pixelsCount / width) * 100;
    return percentage;
  }

  return (
    <div className="calculator">
      <label>
        px:
        <input onChange={(e) => setPixelValue(e.target.value)} />
      </label>

      <label>
        <input
          type="radio"
          name="1920"
          value={1920}
          onChange={(e) => setFullWidth(e.target.value)}
        />
        1920
      </label>

      <label>
        <input
          type="radio"
          name="1080"
          value={1080}
          onChange={(e) => setFullWidth(e.target.value)}
        />
        1080
      </label>

      <div className="calculator__result">
        {calculatePercentage(fullWidth, pixelValue)}
      </div>
    </div>
  );
};
