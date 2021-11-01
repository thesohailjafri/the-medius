import * as d3 from 'd3'
import KLC from '../../../Functions/KLC'
export const barChartD3 = (data, mainSvg, widthContainer, scaled = 1) => {
  var svgWidth = widthContainer
  var svgHeight = 340
  let yAxisDataLable = data.yAxisData.map(val => { return (KLC(val)) })




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
    .style("z-index", 999)

  let tooltipArrow = d3.select('.tooltip-bar-radial-chart').append('div')
    .attr('class', 'tooltip-arrow')
    .style('width', '0')
    .style('height', '0')
    .style('border-left', '5px solid transparent')
    .style('border-right', '5px solid transparent')
    .style('border-top', '5px solid #303030')
    .style('position', 'absolute')
    .style('display', 'none')
    .style("z-index", 999)



  function showTooltip(d, i) {
    tooltip.style('left', (d.pageX) - 25 + 'px')
      .style('top', (d.pageY - 10 - 28) + 'px')
      .style('display', 'block')
      .text(KLC(i.value))
    // + " ruppee"
    tooltipArrow
      .style('left', (d.pageX - 5) + 'px')
      .style('top', (d.pageY - 10) + 'px')
      .style('display', 'block')
  }

  function hideTooltip() {
    tooltip.style('display', 'none')
    tooltipArrow.style('display', 'none')

  }


  var svg = mainSvg

    .attr('transform', 'translate(' + (svgWidth * (scaled - 1) / 2) + ',' + (svgHeight * (scaled - 1) / 2) + ') scale(' + scaled + ')')

    .attr("width", svgWidth)
    .attr("height", svgHeight)
  // target the single container and include one div for data-viz
  const container = d3.select(".container-bar")
  // ! all visualization share the same SVG structure (although margin and height values are modified for the second viz, requiring less space)
  // ! all viz benegit also from the same tooltip (although including different text values)

  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 70
  }

  const width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom
  // HORIZONTAL BAR CHART
  // include a chart visualizing data regarding the number of licenses for different sport categories, and for hunting purposes
  // structure the data in an array of objects detailing 1. category and 1. value



  // VERTICAL BAR CHART
  // include variables which are used in stead of the margin.left, margin bottom and height defined for the other SVG
  // the remainder of the margins and width values are used as-is
  const marginLeftAge = margin.left / 2
  const marginBottomAge = margin.bottom + 20
  const heightAge = height / 2

  // replicate the reasoning applied to the first visualization, inclluding a wrapping section and introductory HTML elements

  // include the data referring to the age intervals and percentages
  // strucure the data in an array of objects, similarly to the first viz


  const dataAge = data.data


  // SVG
  // using the updated values for the left margin and height values
  const ageSVG = svg
    .attr("viewBox", `0 0 ${width + marginLeftAge + margin.right} ${heightAge + margin.top + marginBottomAge}`)
    .append("g")
    .attr("transform", `translate(${marginLeftAge}, ${margin.top})`)

  // SCALES
  // switching the reasoning applied to the previous viz, as to have the bars drawn vertically

  const ageYScale = d3
    .scaleLinear()
    // domain to go from 0 to 50 (as from 0 to 100 would render miniscule bars)
    .domain([0, data.maxValue])
    // range from the height to 0 to complement the top to bottom SVG logic
    .range([heightAge, 0])

  const ageXScale = d3
    .scaleBand()
    .domain(dataAge.map(dataLicense => dataLicense.category))
    .range([0, width])

  // AXES
  const ageXAxis = d3
    .axisBottom(ageXScale)
    .ticks(5)



  // const xAxisGrid1 = d3.axisBottom()
  //     .tickSize(-5)
  //     // .tickFormat(v => v)
  //     .ticks(5)


  const ageYAxis = d3
    .axisLeft(ageYScale)
    // reduce the number of ticks
    .ticks(10)
    .tickSize(-width)
    // format the vertical tick labels to show a percentage (expect for the origin, shown as-is)
    .tickValues(data.yAxisData)
    .tickFormat((d, i) => [...yAxisDataLable][i])   // .tickFormat((d) => (d !== 0) ? `${d} L` : ``)



  function wrap(text, width) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y") - 6,
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em")
      while (word = words.pop()) {
        line.push(word)
        tspan.text(line.join(" "))
        if (tspan.node().getComputedTextLength() > width) {
          line.pop()
          tspan.text(line.join(" "))
          line = [word]
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word)
            .style("font-weight", "bold")
        }
      }
    })
  }
  ageSVG
    .append("g")
    .attr("class", `axis`)
    .attr("id", `x-axis`)
    .attr("transform", `translate(0, ${heightAge})`)
    .call(ageXAxis)
    .call(g => g.attr("class", "yAxis"))
    .call(g => g.selectAll("path")
      .attr("opacity", "0"))
    .call(g => g.selectAll("line")
      .attr("opacity", "0"))
    .call(g => g.selectAll(".tick text")
      .style("font-weight", "bold")
    )
    .selectAll(".tick text")
    .call(wrap, 20)


  ageSVG
    .append("g")
    .attr("id", `y-axis`)
    .attr("class", `axis`)
    .call(ageYAxis)
    .call(g => g.selectAll("path")
      .attr("opacity", "0"))
    .call(g => g.attr("class", "yAxis"))
    .call(g => g.selectAll("text").attr('font-weight', 'bold'))

    .call(g => g.selectAll("line")
      .attr("stroke-opacity", 1)
      .attr("stroke", '#eaeaea')
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "2,2"))
    .call(g => g.selectAll("text").style('font-size', '10px'))


  // GRID LINES
  // include grid lines, on the basis of horizontal ticks
  ageSVG
    .select("g#y-axis")
    .selectAll("g.tick")
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", width)
    .attr("y2", 0)
    .style("opacity", 0.3)

  // FORMAT
  // formatting function to have round numbers
  const formatPercent = d3.format("d")




  ageSVG
    .selectAll("rect")
    .data(dataAge)
    .enter()
    .append("rect")
    .attr("rx", 2)
    .attr("ry", 2)
    // add a class of .bar to all rectangle elements
    .attr("class", "bar")
    // position the rectangle elements alongside the horizontal axis
    .attr("x", (d) => ageXScale(d.category) + ageXScale.bandwidth() / 4)
    .attr("width", 4)
    // include y and height values pushing the rectangle elements to the bottom of the SVG
    // transition the bars by incresing the height value and moving the y coordinate where the bar would end (as SVG are drawn top to bottom)
    .attr("y", ageYScale(data.maxValue))
    // .transition()
    // .duration((d, i) => 1000)
    // .delay((d, i) =>  100 * i)
    // .attr("y", (d) => ageYScale(d.value))
    .attr("height", heightAge)
    .attr('fill', "#eaeaea")

  // VERTICAL BARS
  // append a rect element for each data point
  ageSVG
    .append("g")

    .selectAll("rect")
    .data(dataAge)
    .enter()
    .append("rect")
    .on('mousemove', showTooltip)
    .on('mouseout', hideTooltip)
    .style('cursor', "pointer")
    .attr("rx", 2)
    .attr("ry", 2)
    // add a class of .bar to all rectangle elements
    .attr("class", "bar")
    // position the rectangle elements alongside the horizontal axis
    .attr("x", (d) => ageXScale(d.category) + ageXScale.bandwidth() / 4)
    .attr("width", 4)
    // include y and height values pushing the rectangle elements to the bottom of the SVG
    // transition the bars by incresing the height value and moving the y coordinate where the bar would end (as SVG are drawn top to bottom)
    .attr("y", ageYScale(0))
    .attr("height", 0)
    .transition()
    .duration((d, i) => 1000)
    .delay((d, i) => 100 * i)
    .attr("y", (d) => ageYScale(d.value))
    .attr("height", (d) => (heightAge) - ageYScale(d.value))
    .attr('fill', function (d, i) {

      var colors = [data.color, data.color1]
      var grad = mainSvg.append('defs')
        .append('linearGradient')
        .attr('id', 'grad' + i)
        .attr('x1', '0%')
        .attr('x2', '0%')
        .attr('y1', '0%')
        .attr('y2', '100%')

      grad.selectAll('stop')
        .data(colors)
        .enter()
        .append('stop')
        .style('stop-color', function (d) { return d })
        .attr('offset', function (d, i) {
          return 100 * (i / (colors.length - 1)) + '%'
        })


      return 'url(#' + 'grad' + i + ')'
    })



}
