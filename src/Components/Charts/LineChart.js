import { useD3 } from './Utils/useD3';
import { lineChartD3 } from './Utils/lineChartD3';
import React from 'react';

function LineChart({ data }) {
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      lineChartD3(data,svg)
    },
    [data.length]
  );

  let heightSvg = 300

  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        width: '100%',
        display: 'flex'
        }}>

        <svg ref={ref}
        style={{
          height: heightSvg,
          width: '100%',
          display: 'flex'
          }}>
        </svg>
        <div className="tooltip-bar-radial-chart"></div>
        
    </div>
  );
}

export default LineChart;
