import * as d3 from 'd3';

export const horizontalChartD3 = (data, mainSvg, scaled=1) => {
var svgWidth = 300;
var svgHeight = data.length * 50;
var scaleFactor = 0;
var barWith = 4
var barPadding = 44


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
        tooltip.style('left', (d.pageX ) -25 + 'px')
            .style('top', (d.pageY - 10 - 28) + 'px')
            .style('display', 'inline-block')
            .text( i.tooltipLabel + (i && i.value) );
        tooltipArrow
            .style('left', (d.pageX - 5)  + 'px')
            .style('top', (d.pageY - 10) + 'px')
            .style('display', 'inline-block')
    }

    function hideTooltip() {
        tooltip.style('display', 'none');
        tooltipArrow.style('display', 'none');
        
    }


  var svg = mainSvg

   .attr('transform', 'translate(' + (svgWidth * (scaled - 1)/2 ) + ',' + (svgHeight * (scaled - 1)/2 ) + ') scale(' + scaled + ')')
  
   .attr("width", svgWidth )
   .attr("height", svgHeight )

  var x = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([0, svgWidth]);
  
  
  var bar = svg.selectAll("g")
    
    .append("g")


    bar.data(data)
    .enter().append("rect")
     .attr("class", "first")
     .attr("width", 0) 
     .attr("x", 0)
      .attr("y", function(d, i) {
          return i * barPadding;        // get the start position
      })
     .attr('fill', "#f4f6f8")
     .attr("height", barWith)
     .attr("rx", 2)
     .attr("ry", 2)
     .transition()
     .delay((d, i) => i * 200)
     .duration(1000)
     .attr("width", function(d) {
      return svgWidth;  // get the width
    }) 

  bar.data(data)
  .enter().append("rect")
    .on('mousemove', showTooltip)
    .on('mouseout', hideTooltip)
   .attr("class", "first")
   .attr("width", 0) 
   .style('cursor', 'pointer')

   .attr("x", function(d) {
    return 0;        // get the start position
  })
    .attr("y", function(d, i) {
        return i *barPadding;        // get the start position
    })
    .attr('fill', function (d, i) {
        var colors = [ d.color, d.color1 ];
        var grad = mainSvg.append('defs')
            .append('linearGradient')
            .attr('id', 'grad' + i)
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%');
      
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
   .attr("height", barWith)
   .attr("rx", 2)
   .attr("ry", 2)
   .transition()
   .delay((d, i) => i * 200)
   .duration(1000)
   .attr("width", function(d) {
    return x(d.value);  // get the width
  }) 


}
