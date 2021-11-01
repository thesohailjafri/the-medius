import * as d3 from 'd3';

export const verticalBarChartD3 = (preperedDataObj, mainSvg, scaled=1) => {


    


    let chartContainer = mainSvg.append('g')
    .attr('transform', 'translate(' + (40 * scaled) + ',' + (40 * scaled) + ') scale(' + scaled +')')
    .attr('width', 300 )
      .attr('height', 130 )
    let axis = chartContainer.append('g')
      .attr('class', 'axis')
      .append('g')
    let gTop = chartContainer.append('g')
      .attr('class', 'top')
      .append('g')
    let gBottom = chartContainer.append('g')
      .attr('class', 'bottom')
      .append('g')
    
    let textLabels = mainSvg.append('g')
      .attr('class', 'textLabels')
      .append('g')
      .attr('transform', 'scale(' + (scaled) +')')

    
    var margin = { "top": 0, "right": 0, "bottom": 0, "left": 0 }
    var height = 65;
    var rectWidth = 4;
    var spacer = 72
    var spaceSide = 16
    var width = 40* preperedDataObj.data.length + spaceSide*2;
    
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

    
    
    var xMax = preperedDataObj.data.length * rectWidth;
    var xScale = d3.scaleLinear()
      .domain([0, xMax])
      .range([margin.left, width - margin.right]);
    
    // TOP
    var rectTop = gTop.selectAll('rect')
      .data(preperedDataObj.data)
      .enter().append('rect')
      .on('mousemove', showTooltip)
      .on('mouseout', hideTooltip)
    //   .attr('transform',
    //     'translate(' + (0) + ',' + (0) + ')')
      .style('cursor', 'pointer')
      .attr('x', function (d, i) {
        return i * (rectWidth + spacer) + spaceSide//xScale(i * rectWidth)
      })
      .attr('y', function (d) {
        return 0
      })
      .attr("rx", 2)
      .attr("ry", 2)
      .attr('width', rectWidth)

      .transition()
      .delay((d, i) => i * 200)
      .duration(1000)
      .attr('height', function (d) {
        return height * (d.top.value / d.top.maxValue)
      })
      .attr('fill', function (d) {
        return d.top.color
      })

      .attr('margin', 0);
    // // BOTTOM
    
    
    
    var rectBottom = gBottom.selectAll('rect')
      .data(preperedDataObj.data)
      .enter().append('rect')
      .on('mousemove', showTooltip)
      .on('mouseout', hideTooltip)
      .attr('transform', 'translate(' + (0) + ',' + (65) + ')')
      .style('opacity', 0.8)
      .style('cursor', 'pointer')
      .attr('x', function (d, i) {
        return i * (rectWidth + spacer) + spaceSide
      })
      .attr("y", function (d) {
        return d3.scaleLinear()
        .domain([0, d.bottom.maxValue])
        .range([height, 0])(0);
      })
      .attr('fill', function (d, i) {
          
        var colors = [ d.bottom.color, d.bottom.color1 ];
        var grad = mainSvg.append('defs')
            .append('linearGradient')
            .attr('id', 'grad' + i)
            .attr('x1', '0%')
            .attr('x2', '0%')
            .attr('y1', '0%')
            .attr('y2', '100%');

        grad.selectAll('stop')
            .data(colors)
            .enter()
            .append('stop')
            .style('stop-color', function(d){ return d; })
            .attr('offset', function(d,i){
            return 100 * (i / (colors.length - 1)) + '%';
            })


        return 'url(#' + 'grad' + i + ')'
      })
      .attr('width', rectWidth)
      .attr('height', 0)
      .attr("rx", 2)
      .attr("ry", 2)
      .transition()
      .delay((d, i) => i * 200)
      .duration(1000)
      .attr("y", function (d) {
        return (height - height * (d.bottom.value / d.bottom.maxValue)); })
      .attr('margin', 0)
      .attr('height', function (d) {
        return (height * (d.bottom.value / d.bottom.maxValue)); })
    
    
    var axisEl = axis.selectAll('rect')
      .data(preperedDataObj.data)
      .enter().append('rect')
      .attr('x', function (d, i) {
        return i * (rectWidth + spacer) + spaceSide
      })
      .attr('fill', '#eaeaea')
      .attr('width', rectWidth)
      .attr('height', height * 2)
      .attr("rx", 2)
      .attr("ry", 2)
      .transition()
      .delay((d, i) => i * 200)
      .duration(1000)
      .attr('margin', 0)

    
      axis.append("line")
      .attr("x1", -14)
      .attr("y1", height)
      .attr("x2", width +14)
      .attr("y2", height)
      .style("fill", "black")
      .style("stroke", "#eaeaea")
      .style("stroke-width", 1)
      .style("stroke-dasharray", ("4, 2"))
    
      
    let textContainerTop = textLabels.selectAll('g') //.append("g")
      .data(preperedDataObj.data)
      .enter()
      .append("text")
      .attr("class", "return")
      .style("font-size", "12px")
      // .style("font-weight", "bold")
      .attr('fill', '#505050')
      .text( function (d, i) {
        return d.top.label
      })
      .attr("text-anchor", "middle")
      .attr('x', function (d, i) {
        return i * (rectWidth + spacer) + spaceSide
      })
      .attr('transform', function (d, i) {
        return 'translate(' + (40 ) + ',' + (30 ) + ')'
      })
    
      let textContainerTop1 = textLabels.selectAll('g') //.append("g")
      .data(preperedDataObj.data)
      .enter()
      .append("text")
      .attr("class", "return")
      .style("font-size", "12px")
      // .style("font-weight", "bold")
      .attr('fill', '#bebebe')
      .text( function (d, i) {
        return d.label
      })
      .attr("text-anchor", "middle")
      .attr('x', function (d, i) {
        return i * (rectWidth + spacer) + spaceSide
      })
      .attr('transform', function (d, i) {
        return 'translate(' + (40 ) + ',' + (10 ) + ')'
      })
    
      let textContainerBottom = textLabels.selectAll('g') //.append("g")
      .data(preperedDataObj.data)
      .enter()
      .append("text")
      .attr("class", "return")
      .style("font-size", "12px")
      // .style("font-weight", "bold")
      .attr('fill', '#505050')
      .text( function (d, i) {
        return d.bottom.label
      })
      .attr("text-anchor", "middle")
      .attr('x', function (d, i) {
        return i * (rectWidth + spacer) + spaceSide
      })
      .attr('transform', function (d, i) {
        return 'translate(' + (40 ) + ',' + (185 ) + ')'
      })
    
    function showTooltip(d, i) {
        tooltip.style('left', (d.pageX ) -25 + 'px')
            .style('top', (d.pageY - 10 - 28) + 'px')
            .style('display', 'inline-block')
            .text( i && i.top.label );
        tooltipArrow
            .style('left', (d.pageX - 5)  + 'px')
            .style('top', (d.pageY - 10) + 'px')
            .style('display', 'inline-block')
    }

    function hideTooltip() {
        tooltip.style('display', 'none');
        tooltipArrow.style('display', 'none');
        
    }


    // rectTop.on('mousemove', showTooltip)
    // rectTop.on('mouseout', hideTooltip)
    // gTop.data(preperedDataObj.data)
    // .enter().on('mousemove', showTooltip)
    // gTop.data(preperedDataObj.data)
    // .enter().on('mouseout', hideTooltip)
}
