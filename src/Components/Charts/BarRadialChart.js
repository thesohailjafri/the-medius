import { useD3 } from './Utils/useD3'
import { barRadialChartD3 } from './Utils/barRadialChartD3'
import React from 'react'

function BarRadialChart({ data, scale }) {
  scale = scale || 1
  const ref = useD3(
    (svg) => {
      barRadialChartD3(data, svg, scale || 1)
    },
    [data.data.length]
  )

  let heightSvg = (data.data.length > 4 ? 200 : 150) * scale

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
  )
}

export default BarRadialChart
