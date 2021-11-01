import { useD3 } from './Utils/useD3';
import { circularWithBarChartD3 } from './Utils/circularWithBarChartD3';
import React from 'react';

function CircularWithBarChart({ data, scale }) {
  scale = scale || 1
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      circularWithBarChartD3(data,svg,scale)
    },
    [data.data.length]
  );

  let heightSvg = 180 * scale

  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        width: heightSvg,
        }}>
        <div className="tooltip-bar-radial-chart"></div>
        <svg
        ref={ref}
        
        style={{
            height: heightSvg,
            width: heightSvg,
        }}
        >
        </svg>
    </div>
  );
}

export default CircularWithBarChart;
