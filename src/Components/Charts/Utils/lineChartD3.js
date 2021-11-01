import * as d3 from 'd3';
import {
  axisBottom as d3_axisBottom,
  axisLeft as d3_axisLeft,
  scaleLinear as d3_scaleLinear,
  select as d3_select
} from 'd3';

export const lineChartD3 = (data, mainSvg) => {

  let _this = data

  // dom container width and height, parameter padding
  let width = _this.width
  let height = _this.heigth
  let padLeft = _this.padding.left
  let padRight = _this.padding.right
  let padTop = _this.padding.top
  let padBottom = _this.padding.bottom


  // Check whether there is a problem with the padding parameter
  if (isNaN(padLeft) || isNaN(padRight) || isNaN(padTop) || isNaN(padBottom)) {
    return
  }
  // Start drawing, create svg canvas
  let svg = mainSvg
    .attr('width', width)
    .attr('height', height)
  // x-axis scale
  // It looks more beautiful without leaving blank here
  let xData = _this.data.map((item) => item.name)
  let xScale = d3.scalePoint().domain(xData).range([0, width - padLeft - padRight])
  // let xAxis = d3.axisBottom().scale(xScale)
  // y scale
  let yData = _this.data.map((item) => item.value)
  let max = d3.max(yData)
  let yScale = d3.scaleLinear().domain([0, max * 1.1]).range([height - padTop - padBottom, 20]).nice()
  // let yAxis = d3.axisLeft().scale(yScale)

  max = yScale.domain()[1]
  // Create a color transition before creating the region generator
  let defs = svg.append('defs')
  let linearGradient = defs.append('linearGradient')
    .attr('id', 'linearColor')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '0%')
    .attr('y2', '100%')
  let a = 'rgba(153, 233, 236, 0.3);'
  let b = 'rgba(138,188,223,0.3)'
  linearGradient.append('stop')
    .attr('offset', '0%')
    .style('stop-color', 'white')
    .style('stop-color', b)
  linearGradient.append('stop')
    .style('stop-color', 'white')
    .attr('offset', '100%')
    .style('stop-color', b)
  // Create a region generator
  let area = d3.area()
    .x(function (d, i) {
      return xScale(d.name) + padLeft
      // Return padleft + (width - padleft - padright) / "this. Data. Length * (I + 0.5) / / set x0 and x1 accessors. Of course, you can set them separately. It's unnecessary
    })
    .y0(function (d, i) {
      return height - padBottom // Set y0 to x-axis
    })
    .y1(function (d, i) {
      return yScale(d.value)
    })
    .curve(d3.curveCatmullRom)
  svg.append('path')
    .attr('d', area(_this.data))
    .style('fill',
      'url(#' + linearGradient.attr('id') + ')'
    )
    .style('opacity', 0.5)
  // Add a line
  let line = d3.line()
    .x(function (d, i) {
      // There's a problem with xScale
      return padLeft + xScale(d.name)
    })
    .y(function (d, i) {
      return yScale(d.value)
    })
    .curve(d3.curveCatmullRom)
  svg.append('path')
    .attr('stroke', '#4fbdce')
    .attr('stroke-width', '2px')
    .attr('fill', 'none')
    .attr('class', 'line')
    .attr('d', line(_this.data))
  // Add circle description

  // Complete the animation by masking
  // Design idea: add a mask, cover the area map, and then pan left to right, which looks like the animation effect of the area map itself
  let shadow = svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .style('fill', 'white')
    .attr('x', 0)
  // Move mask, complete animation
  shadow.transition()
    .delay(500)
    .duration(1000)
    .ease(d3.easeLinear)
    .attr('x', width)
    .attr('width', 0)
  // Add toolbips

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


  // let toolTips = d3.select('body').append('div')
  //   .attr('class', 'toolTips')
  //   .style('opacity', 0)
  //   .style('position', 'absolute')
  // Add guides
  let xTooltip = 0
  let yTooltip = 0

  svg.on('mousemove', function (e, i) {
    // By calculation, which node is closer to the current mouse
    let count = (e.offsetX - padLeft) / (width - padLeft - padRight) * (_this.data.length - 1)
    count = count > 0 ? count : 0
    count = Math.round(count) >= _this.data.length ? _this.data.length - 1 : count // Determine whether count is the value of > = data.length, and establish the boundary value
    let node = _this.data[Math.round(count)]

    let xTooltipNew = padLeft + xScale(node.name) + (e.clientX -e.offsetX) -10
    let yTooltipNew = ( e.pageY - e.offsetY + (height - padTop - padBottom) )
    -(node.value/max * ((height - padTop - padBottom))) -30

    xTooltip = Math.abs(xTooltipNew - xTooltip) > 5 ? xTooltipNew : xTooltip
    yTooltip = Math.abs(yTooltipNew - yTooltip) > 5 ? yTooltipNew : yTooltip

    tooltip
    .style('left', xTooltip - 66+'px')
    .style('top', yTooltip + 'px')
    .style('display', 'inline-block')
    .text(_this.tooltipLabel + node.value);

    tooltipArrow
    .style('left', xTooltip +5 + 'px')
    .style('top', yTooltip +28+ 'px')
    .style('display', 'inline-block')

    subline
      .transition()
      .duration(50)
      .attr('x1', padLeft + xScale(node.name))
      .attr('x2', padLeft + xScale(node.name))
  })
  svg.on('mouseout', function (d) {
    if(d.relatedTarget && d.relatedTarget.classList[0] === "tooltip") {

    } else {
    tooltip.style('display', 'none');
    tooltipArrow.style('display', 'none');
    subline.style('opacity', 0)

    }

    // toolTips.style('opacity', 0)
    // toolTips.html('')
  })





  const WIDTH = width;
  const HEIGHT = height;
  const MARGIN = { top: padTop, right: padRight, bottom: padBottom, left: padLeft };
  const INNER_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
  const INNER_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;

  const xAxisGrid1 = d3_axisBottom()
    .scale(xScale)
    .tickSize(-INNER_HEIGHT)
    .tickFormat((v, i) => !!i ? v : '')

  // .tickFormat('')
  // .ticks(5)
  const yAxisGrid1 = d3_axisLeft()
    .scale(yScale)
    .tickSize(-INNER_WIDTH)
    .tickFormat(v => !!v ? v + ' L' : '')
    .ticks(5)


  svg.append('g')
    .attr('transform', 'translate(' + padLeft + ',' + (height - padBottom) + ')')
    .call(xAxisGrid1)
    .call(g => g.attr("class", "xAxis"))
    .call(g => g.selectAll("line")
      .attr("stroke-opacity", 0.2)
      // .style('opacity', 0)
      .attr("stroke-dasharray", "2,2"))
    .call(g => g.selectAll("path")
      .attr("stroke", "#ddd")
      .attr("opacity", 0.1)
      // .style('opacity', 0)
      .attr("stroke-dasharray", "2,2"))
    .style('font-size', '12px')

  svg.append('g')
    .attr('transform', 'translate(' + padLeft + ',' + padTop + ')')
    .call(yAxisGrid1)
    .call(g => g.attr("class", "yAxis"))
    .call(g => g.selectAll("line")
      .attr("stroke-opacity", 0.1)
      .attr("stroke-dasharray", "2,2"))
    .call(g => g.selectAll("path")
      // .attr("stroke", "#ddd")
      .attr("opacity", 0))
    .style('font-size', '12px')


    let subline = svg.append('line')
    .attr('class', 'subline')
    .attr('stroke', 'rgba(0,0,0,0.5)')
    .attr('stroke-width', '1')
    // Set dashed line
    .attr('stroke-dasharray', '2,2')
    .attr('y1', height - padBottom)
    .attr('y2', padTop)
    .style('opacity', 0)
  svg.on('mouseover', function (e, i) {
    // toolTips.style('opacity', 1)
    let count = (e.offsetX - padLeft) / (width - padLeft - padRight) * (_this.data.length - 1)
    count = count > 0 ? count : 0
    count = Math.round(count) >= _this.data.length ? _this.data.length - 1 : count // Determine whether count is the value of > = data.length, and establish the boundary value
    let node = _this.data[Math.round(count)]

    let xTooltipNew = padLeft + xScale(node.name) + (e.clientX -e.offsetX) -10
    let yTooltipNew = ( e.pageY - e.offsetY + (height - padTop - padBottom) )
    -(node.value/max * ((height - padTop - padBottom))) -30

    xTooltip = Math.abs(xTooltipNew - xTooltip) > 5 ? xTooltipNew : xTooltip
    yTooltip = Math.abs(yTooltipNew - yTooltip) > 5 ? yTooltipNew : yTooltip

    tooltip
    .style('left', xTooltip + 'px')
    .style('top', yTooltip + 'px')
    .style('display', 'inline-block')
    .text( node.value);

    tooltipArrow
    .style('left', xTooltip +10 + 'px')
    .style('top', yTooltip +28+ 'px')
    .style('display', 'inline-block')

    subline.style('opacity', 1)
  })


  
    d3.selectAll(".xAxis>.tick>text")
    .each(function(d, i){
      d3.select(this).style("font-size","8px").style("color", "#727272")
      .attr("transform","translate(0, 10)")
    });
    d3.selectAll(".yAxis>.tick>text")
    .each(function(d, i){
      d3.select(this).style("font-size","8px").style("color", "#727272")
      .attr("transform","translate(-10, 0)")
    });

}


