import { useD3 } from './Utils/useD3';
import { horizontalChartD3 } from './Utils/horizontalChartD3';
import React from 'react';

function HorizontalBarChart({ data, scale }) {
  scale = scale || 1
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      horizontalChartD3(data,svg,scale)
    },
    [data.length]
  );

  let heightSvg = 50* data.length* scale
  const listItems = data.map((item, index) =>
    <div key={index} style={{
      paddingBottom: 34* scale  + (scale -1)*3*data.length ,
      marginTop: -4,
      paddingRight: 10* scale,
      fontSize: 12
    
    }}>{item.label}</div>
  );
  return (
    <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        width: '100%',
        display: 'flex'
        }}>
        <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        color: "#727272",
        textAlign: 'end',
        justifyContent: "flex-end"
        }}>{listItems}</div>
        <svg ref={ref}>
        </svg>
        <div className="tooltip-bar-radial-chart"></div>
        
    </div>
  );
}

export default HorizontalBarChart;
