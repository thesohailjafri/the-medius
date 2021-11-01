import { useD3 } from './Utils/useD3';
import { verticalBarChartD3 } from './Utils/verticalBarChartD3';
import React from 'react';

function VerticalBarChart({ data, scale }) {
  scale = scale || 1
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      verticalBarChartD3(data,svg,scale || 1)
    },
    [data.data.length]
  );
  const tLeft = data.titleLeft
  const tRight = data.titleRight

  let heightSvg = 200 * scale
  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        display: 'flex',
        'alignItems': 'center',
        height: heightSvg,
        // width: 200 * scale + 100,
        }}>
        <div className="tooltip-bar-radial-chart"></div>
        <div style={{"color": "#727272", "fontSize": 12, "paddingTop": "6px"}}>{tLeft}</div>
        <svg
        ref={ref}
        
        style={{
            height: heightSvg,
            width: 200 * scale,
        }}
        >
        </svg>
        <div style={{"color": "#727272", "fontSize": 12, "paddingTop": "6px"}}>{tRight}</div>
    </div>
  );
}

export default VerticalBarChart;
