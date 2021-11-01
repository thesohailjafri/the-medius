import { useD3 } from './Utils/useD3';
import { barChartD3 } from './Utils/barChartD3';
import React from 'react';

function BarChart({ data, scale, width }) {
  const ref = useD3(
    (svg) => {
      svg.selectAll("*").remove()
      barChartD3(data,svg, width || 500 ,scale || 1)
    },
    [data.data.length]
  );

  let heightSvg = 300
  // const listItems = data.map((item, index) =>
  //   <div key={index} style={{
  //     paddingBottom: 34* scale  + (scale -1)*3*data.length ,
  //     marginTop: -4,
  //     paddingRight: 10* scale,
  //     fontSize: 12
    
  //   }}>{item.label}</div>
  // );
  return (
    <div className="container-bar" style={{
        'fontFamily': 'Open Sans, sans-serif',
        height: heightSvg,
        width: '100%',
        display: 'flex'
        }}>
        {/* <div style={{
        'fontFamily': 'Open Sans, sans-serif',
        color: "#727272",
        textAlign: 'end',
        justifyContent: "flex-end"
        }}>{listItems}</div> */}
        <svg ref={ref}>
        </svg>
        <div className="tooltip-bar-radial-chart"></div>
        
    </div>
  );
}

export default BarChart;
