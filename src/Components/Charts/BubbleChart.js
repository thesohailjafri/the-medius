import { useD3 } from './Utils/useD3';
import { bubbleChartD3 } from './Utils/bubbleChartD3';
import React from 'react';

function BubbleChart({ data, scale, width }) {
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      bubbleChartD3(data,svg, width || 500 ,scale || 1)
    },
    [data.data.length]
  );

  let heightSvg = 300
  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        display: 'flex'
        }}>
        <svg ref={ref}>
        </svg>
        <div className="tooltip-bar-radial-chart"></div>
        
    </div>
  );
}

export default BubbleChart;
