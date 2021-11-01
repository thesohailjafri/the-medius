import { useD3 } from './Utils/useD3';
import { circularChartD3 } from './Utils/circularChartD3';
import React from 'react';

function CircularChart({ data, scale }) {
  scale = scale || 1
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      circularChartD3(data,svg,scale)
    },
    [data.data.length]
  );

  let heightSvg = 180 * scale

  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        width: 450 * scale,
        }}>
        <div className="tooltip-bar-radial-chart"></div>
        <svg
        ref={ref}
        
        style={{
            height: heightSvg,
            width: 450 * scale,
        }}
        >
        </svg>
    </div>
  );
}

export default CircularChart;
