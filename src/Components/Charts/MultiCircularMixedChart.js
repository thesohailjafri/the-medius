import { useD3 } from './Utils/useD3';
import { multiCircularMixedChartD3 } from './Utils/multiCircularMixedChartD3';
import React from 'react';

function MultiCircularMixedChart({ data, scale }) {
  scale = scale || 1
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      multiCircularMixedChartD3(data,svg,scale || 1)
    },
    [data.data.length]
  );

  // (data.data.length > 4 ? 200 : 150)
  let heightSvg = 320 * scale

  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        width: 340 * scale,
        }}>
        <div className="tooltip-bar-radial-chart"></div>
        <svg
        ref={ref}
        
        style={{
            height: heightSvg,
            width: 340 * scale,
        }}
        >
        </svg>
    </div>
  );
}

export default MultiCircularMixedChart;
