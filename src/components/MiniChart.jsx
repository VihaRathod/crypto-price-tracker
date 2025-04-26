import React from 'react';
import './MiniChart.css';

const MiniChart = ({ data, change7d }) => {
  const width = 120;
  const height = 40;
  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  const range = maxVal - minVal;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - minVal) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  const color = change7d >= 0 ? '#16c784' : '#ea3943';

  return (
    <div className="mini-chart">
      <svg width={width} height={height}>
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default MiniChart;