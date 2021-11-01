import * as d3 from 'd3'

export const bubbleChartD3 = (data, mainSvg, widthContainer, scaled = 1) => {
  var svgWidth = 250
  var svgHeight = 250
  var diameter = 250






  // data
  let tooltip = d3.select('.tooltip-bar-radial-chart').append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('display', 'none')
    .style('background', '#303030')
    .style('border-radius', '3px')
    .style('box-shadow', '-3px 3px 15px #888')
    .style('color', 'white')
    .style('padding', '7px 10px')
    .style('height', '28px')

  let tooltipArrow = d3.select('.tooltip-bar-radial-chart').append('div')
    .attr('class', 'tooltip-arrow')
    .style('width', '0')
    .style('height', '0')
    .style('border-left', '5px solid transparent')
    .style('border-right', '5px solid transparent')
    .style('border-top', '5px solid #303030')
    .style('position', 'absolute')
    .style('display', 'none')


  function showTooltip(d, i) {
    tooltip.style('left', (d.pageX) - 25 + 'px')
      .style('top', (d.pageY - 10 - 28) + 'px')
      .style('display', 'inline-block')
      .text(i.data.name + ': ' + i.value)
    tooltipArrow
      .style('left', (d.pageX - 5) + 'px')
      .style('top', (d.pageY - 10) + 'px')
      .style('display', 'inline-block')
  }

  function hideTooltip() {
    tooltip.style('display', 'none')
    tooltipArrow.style('display', 'none')

  }


  let svg = mainSvg
    .attr('transform', 'translate(' + (-20 + svgWidth * (scaled - 1) / 2) + ','
      + (svgHeight * (scaled - 1) / 2) + ') scale(' + scaled + ')')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
  // target the single container and include one div for data-viz
  // 0c5d5d



  let dataset =
  {
    "children": data.data
  }

  // var color = d3.scaleOrdinal(d3.schemeCategory20);

  var bubble = d3.pack(dataset)
    .size([diameter + 20, diameter - 60])
    .padding(-10)



  svg
    .attr("class", "bubble")

  var nodes = d3.hierarchy(dataset)
    .sum(function (d) { return d.value })

  var node = svg.selectAll(".node")
    .data(bubble(nodes).descendants())
    .enter()
    // .on('mousemove', showTooltip)
    // .on('mouseout', hideTooltip)
    .filter(function (d) {
      return !d.children
    })
    .append("g")
    .attr("class", "node")
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")"
    })



  node.append("circle")
    .style('cursor', 'pointer')
    .style("stroke", 'white')
    .style("stroke-width", '4px')
    .on('mousemove', showTooltip)
    .on('mouseout', hideTooltip)
    .attr("r", function (d) {
      return d.r
    })
    .style("fill", function (d) {
      return d.data.color
    })


  node.append("text")
    .style('cursor', 'pointer')
    .attr("dy", ".3em")
    .attr("fill", "#0c5d5d")
    .attr("font-size", "18")
    .style("text-anchor", "middle")
    .text(function (d) {
      return d.data.name.substring(0, d.r / 3)
    })

}
