import * as d3 from 'd3';

export const stackedHorizontalChartD3 = (data, mainSvg, scaled = 1) => {
  var svgWidth = 300;
  var svgHeight = data.length * 50;
  var barWith = 6
  var barPadding = 64


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
    // .style('border-top', '5px solid #303030')
    .style('border-bottom', '5px solid #303030')
    .style('position', 'absolute')
    .style('display', 'none')


  function showTooltip(d, i) {
    tooltip.style('left', (d.pageX) - 80 + 'px')
      .style('top', (d.pageY + 15) + 'px')
      .style('display', 'inline-block')
      .text(i.tooltipStartText +i.value + i.tooltipEndText);
    tooltipArrow
      .style('left', (d.pageX  - 15) + 'px')
      .style('top', (d.pageY + 10) + 'px')
      .style('display', 'inline-block')
  }

  function hideTooltip(d) {
    if(d.relatedTarget && d.relatedTarget.classList[0] === "tooltip") {

    } else { 
      tooltip.style('display', 'none');
      tooltipArrow.style('display', 'none');
    }

  }


  var svg = mainSvg

  .attr('transform', 'translate(' + (svgWidth * (scaled - 1) / 2) + ',' + (svgHeight * (scaled - 1) / 2) + ') scale(' + scaled + ')')

    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svgCont")

  var x = d3.scaleLinear()
    .domain([0, d3.max(data, function (d) { return d.value; })])
    .range([0, svgWidth]);



  data.forEach((row, barIndex) => {
    let rowData = row.rowData.reverse()

    var bar = svg.selectAll(".svgCont")

    let sumRowData = data.map(item => {
      return item.rowData.reduce((acc, curr) => {
        return curr.value + acc
      }, 0)
    })


    bar.data(rowData)
      .enter().append("rect")
      .on('mousemove', showTooltip)
      .on('mouseout', hideTooltip)
      .attr("class", "first")
      .attr("width",10)
      .style('cursor', 'pointer')
      .attr("x", 0)
      .attr("y", barIndex* barPadding +30)
      .attr('fill', (d) => d.color)
      .attr("height", barWith)
      .attr("rx", 3)
      .attr("ry", 3)
      .transition()
      .delay((d, i) => i * 200)
      .duration(1000)
      .attr("width", function (d, i) {
        let summaryVal = d.value

        rowData.forEach((cur, ind) => {
          if (ind >= i+1) {
            summaryVal = summaryVal + cur.value
          }
        })
        return (summaryVal / sumRowData[barIndex]) * svgWidth;  // get the width
      })

      let container = svg.append("g")
      .attr("height", 30)
      .attr("width", 100)
      .attr("y", barIndex* barPadding)
      .attr("x", 0)
      .attr('transform', 
      'translate(' + (0) + ',' + (barIndex* barPadding + 20) + ') scale(' + scaled + ')')

      container.append("text")
      .attr("height", 30)
      .attr("width", 100)
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .attr('fill', '#505050')
      .text(row.rowName)
      .attr("text-anchor", "start")

  });

  let barIndex = 0



}
