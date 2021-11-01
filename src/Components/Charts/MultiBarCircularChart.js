import { useD3 } from './Utils/useD3';
import { multiBarCircularChartD3 } from './Utils/multiBarCircularChartD3';
import React from 'react';

function MultiBarCircularChart({ data, scale }) {
  scale = scale || 1
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      multiBarCircularChartD3(data,svg,scale || 1)
    },
    [data.data.length]
  );

  // (data.data.length > 4 ? 200 : 150)
  let heightSvg = 220 * scale

  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        width: 380 * scale,
        }}>
        <div className="tooltip-bar-radial-chart"></div>
        <svg
        ref={ref}
        
        style={{
            height: heightSvg,
            width: 380 * scale,
        }}
        >
        </svg>
    </div>
  );
}

export default MultiBarCircularChart;
