import * as d3 from 'd3';

export const multiCircularMixedChartD3 = (dataObject, mainSvg, scaled = 1) => {
    let dataObj = { ...dataObject, data: [dataObject.data] }
    let svg = mainSvg.append('g')
        .attr('class', 'parent')
        .append('g')
        .attr('transform',
            'translate(' + (170 * scaled) + ',' + (150 * scaled) + ') scale(' + scaled + ')')

    var dataset = dataObject




    var width = 300,
        height = 300,
        radius = 170;

    //   var color = d3.scale.category20();

    var pie = d3.pie()
        .sort(null);


    var piedata1 = pie(dataset.pieData.map(v => v.value));

    var arcPie = d3.arc()
        .innerRadius(radius - 78 - 10)
        .outerRadius(radius - 72 - 10)
        .cornerRadius((d, i) => 5)

    let piedata = piedata1.map(v => {
        return { ...v, endAngle: v.endAngle - 0.1 }
    })
    //   var svg = d3.select("body").append("svg")
    //       .attr("width", width)
    //       .attr("height", height)
    //       .append("g")
    //       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var path = svg.selectAll("path")
        .data(piedata)
        .enter().append("path")
        .attr("fill", function (d, i) {
            return dataset.pieData[i].color;
        })
        .attr("d", arcPie);

    let textCont = svg.selectAll("text")


    textCont
        .data(piedata)
        .enter()
        .append("text")
        //   .append('tspan')
        .attr("textLength", 60)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("x", function (d) {
            var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
            d.cx = Math.cos(a) * (radius - 75);

            return d.x = Math.cos(a) * (radius - 30);
        })
        .attr("y", function (d) {
            var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
            d.cy = Math.sin(a) * (radius - 75);
            return d.y = Math.sin(a) * (radius - 30);
        })
        .attr("fill", "none")
        .text("..")
        .each(function (d) {
            var bbox = this.getBBox();
            d.sx = d.x - bbox.width / 2 - 2;
            d.ox = d.x + bbox.width / 2 + 2;
            d.sy = d.oy = d.y + 5;
        });

    textCont
        .data(piedata)
        .enter()
        .append("text")
        //   .append('tspan')

        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("x", function (d) {
            var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
            d.cx = Math.cos(a) * (radius - 75);
            return d.x = Math.cos(a) * (radius - 30);
        })
        .attr("y", function (d) {
            var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
            d.cy = Math.sin(a) * (radius - 75);
            return d.y = Math.sin(a) * (radius - 30);
        })
        .text(function (d) { return d.value + "%"; })
    // .attr("lengthAdjust", "spacingAndGlyphs")
    //   .each(function(d) {
    //     var bbox = this.getBBox();
    //     d.sx = d.x - bbox.width/2 - 2;
    //     d.ox = d.x + bbox.width/2 + 2;
    //     d.sy = d.oy = d.y + 5;
    // });



    textCont
        .data(piedata)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "10px")
        .attr("fill", "#727272")
        .attr("x", function (d) {
            var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
            d.cx = Math.cos(a) * (radius - 75);
            return d.x = Math.cos(a) * (radius - 30);
        })
        .attr("y", function (d) {
            var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
            d.cy = Math.sin(a) * (radius - 75);
            return d.y = Math.sin(a) * (radius - 30) + 18;
        })
        .text(function (d, i) { return dataset.pieData[i].labelBottom; })

    //   svg.append("defs").append("marker")
    //       .attr("id", "circ")
    //       .attr("markerWidth", 6)
    //       .attr("markerHeight", 6)
    //       .attr("refX", 3)
    //       .attr("refY", 3)
    //       .append("circle")
    //       .attr("cx", 3)
    //       .attr("cy", 3)
    //       .attr("r", 3);

    svg.selectAll("path.pointer").data(piedata).enter()
        .append("path")
        .attr("class", "pointer")
        .style("fill", "none")
        .style("stroke", "#eaeaea")
        //   .attr("marker-end", "url(#circ)")
        .attr("d", function (d) {
            if (d.cx > (d.ox - 50)) {
                return "M" + d.sx + "," + d.sy + "L" + d.ox + "," + d.oy + " " + d.cx + "," + d.cy;
            } else {
                return "M" + d.ox + "," + d.oy + "L" + d.sx + "," + d.sy + " " + d.cx + "," + d.cy;
            }
        });
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

    const PI = Math.PI
    const arcMinRadius = 55
    const arcPadding = 15

    let data = dataObj.data
    let title = dataObj.title

    let scale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, 2 * PI]);

    let keys = data.map((d, i) => d.name);
    const numArcs = keys.length;
    const arcWidth = 2;

    let arc = d3.arc()
        .innerRadius((d, i) => getInnerRadius(i))
        .outerRadius((d, i) => getOuterRadius(i))
        .startAngle(0)
        .endAngle((d, i) => {

            return scale(d)
        })
        .cornerRadius((d, i) => 25)

    // axis arcs 
    let arcsAxis = svg.append('g')
        .attr('class', 'axis')
        .selectAll('path')
        .data(data.map(v => ({ name: v.name, color: "#f2f7fa", value: 100 })))
        .enter().append('path')
        .attr('class', 'arcAxis')
        .style('opacity', 1)
        .style('fill', (d, i) => d.color)

    arcsAxis.transition()
        .delay((d, i) => i * 200)
        .duration(1000)
        .attrTween('d', arcTween);

    // data arcs
    let arcsData = svg.append('g')
        .attr('class', 'data')
        .selectAll('path')
        .data(data)
        .enter().append('path')
        .attr('class', 'arc')
        .style('opacity', 1)
        .style('cursor', 'pointer')
        .style('fill', (d, i) => d.color)

    arcsData.transition()
        .delay((d, i) => i * 200)
        .duration(1000)
        .attrTween('d', arcTween);

    let arcsAxisPoint = svg.append('g')
        .attr('class', 'axisPoint')
        .selectAll('path')
        .data(data)
        .enter().append('path')
        .attr('class', 'arcAxisPoint')
        .style('cursor', 'pointer')
        .style('opacity', !dataObject.data.value ? 0 : 1)
        .style('fill', (d, i) => d.color)

    arcsAxisPoint.transition()
        .delay((d, i) => i * 200)
        .duration(1000)
        .attrTween('d', arcTween1);


    let pointSize = 6.001
    let p2 = pointSize * pointSize
    let angles = data.map((v, i) => {
        let meanRadius = (getInnerRadius(i) + getOuterRadius(i)) / 2
        let r2 = meanRadius * meanRadius
        let angle = Math.acos(
            ((2 * r2) - (p2)) / (2 * r2)
        )
        return angle
    })

    let arcs = d3.arc()
        .innerRadius((d, i) => getInnerRadiusPoint(i) + 4)
        .outerRadius((d, i) => getOuterRadiusPoint(i) - 4)

        .startAngle((d, i) => {
            return scale(d) - angles[i]
        })
        .endAngle((d, i) => {
            return scale(d)
        })
        .cornerRadius((d, i) => 25)


    function arcTween1(d, i) {
        let interpolate = d3.interpolate(0, d.value);
        let arc2 = arcs
        return t => {
            return arc2(interpolate(t), i)
        };
    }

    svg.append("text")
        .attr("class", "return")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .attr('fill', !dataObject.data.value ? '#999999' : '#505050')
        .text(dataObject.data.title)
        .attr("text-anchor", "middle")

    svg.append("text")
        .attr("class", "return")
        .style("font-size", "12px")
        .style("font-weight", "regular")
        .attr('fill', !dataObject.data.value ? '#999999' : '#505050')
        .text(!dataObject.data.value ? '' : dataObject.data.name)
        .attr("text-anchor", "middle")
        .attr('transform', 'translate(' + 0 + ',' + 20 + ')')




    arcsData.on('mousemove', showTooltip)
    arcsData.on('mouseout', hideTooltip)
    arcsAxisPoint.on('mousemove', showTooltip)
    arcsAxisPoint.on('mouseout', hideTooltip)

    function arcTween(d, i) {
        let interpolate = d3.interpolate(0, d.value);
        return t => arc(interpolate(t), i);
    }

    function showTooltip(d, i) {
        tooltip.style('left', (d.pageX) - 73 + 'px')
            .style('top', (d.pageY - 10 - 28) + 'px')
            .style('display', 'inline-block')

            .text(dataObj.tooltipText + ' ' + i.value + '%');

        tooltipArrow
            .style('left', (d.pageX - 5) + 'px')
            .style('top', (d.pageY - 10) + 'px')
            .style('display', 'inline-block')
    }

    function hideTooltip() {
        tooltip.style('display', 'none');
        tooltipArrow.style('display', 'none');

    }

    function getInnerRadius(index) {
        return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding);
    }

    function getOuterRadius(index) {
        return getInnerRadius(index) + arcWidth;
    }


    function getInnerRadiusPoint(index) {
        return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding);
    }

    function getOuterRadiusPoint(index) {
        return getInnerRadiusPoint(index) + arcWidth;
    }


}
