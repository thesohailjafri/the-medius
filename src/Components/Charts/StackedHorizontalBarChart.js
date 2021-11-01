import { useD3 } from './Utils/useD3';
import { stackedHorizontalChartD3 } from './Utils/stackedHorizontalChartD3';
import React from 'react';

function StackedHorizontalBarChart({ data, scale }) {
  scale = scale || 1
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      stackedHorizontalChartD3(data,svg,scale)
    },
    [data.length]
  );

  let heightSvg = 50* data.length* scale

  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        width: '100%',
        display: 'flex'
        }}>

        <svg ref={ref}>
        </svg>
        <div className="tooltip-bar-radial-chart"></div>
        
    </div>
  );
}

export default StackedHorizontalBarChart;
