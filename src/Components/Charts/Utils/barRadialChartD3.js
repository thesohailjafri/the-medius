import * as d3 from 'd3'

export const barRadialChartD3 = (dataObj, mainSvg, scaled = 1) => {

    let svg = mainSvg.append('g')
        .attr('class', 'parent')
        .append('g')
        .attr('transform',
            'translate(' + (100 * scaled) + ',' + (100 * scaled) + ') scale(' + scaled + ')')

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

    const PI = Math.PI,
        arcMinRadius = (dataObj.data.length > 4) ? 30 :
            34 + (4 - dataObj.data.length) * 17,
        arcPadding = (dataObj.data.length > 4) ? 12 : 15

    let initFunc = (data, title) => {

        let scale = d3.scaleLinear()
            .domain([0, 100])
            .range([1.35 * PI, 2.65 * PI])

        let keys = data.map((d, i) => d.name)
        const numArcs = keys.length
        const arcWidth = 2

        let arc = d3.arc()
            .innerRadius((d, i) => getInnerRadius(i))
            .outerRadius((d, i) => getOuterRadius(i))
            .startAngle(1.35 * PI)
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
            .attrTween('d', arcTween)

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
            .attrTween('d', arcTween)

        let arcsAxisPoint = svg.append('g')
            .attr('class', 'axisPoint')
            .selectAll('path')
            .data(data)
            .enter().append('path')
            .attr('class', 'arcAxisPoint')
            .style('cursor', 'pointer')
            .style('opacity', 1)
            .style('fill', (d, i) => d.color)

        arcsAxisPoint.transition()
            .delay((d, i) => i * 200)
            .duration(1000)
            .attrTween('d', arcTween1)


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
            let interpolate = d3.interpolate(0, d.value)
            let arc2 = arcs
            return t => {
                return arc2(interpolate(t), i)
            }
        }

        svg.append("text")
            .attr("class", "return")
            .style("font-size", "14px")
            .style("font-weight", "bold")
            .attr('fill', '#505050')
            .text(title)
            .attr("text-anchor", "middle")


        var legendItemSize = 10
        var legendSpacing = 8 * scaled
        let paddingLegend = 28


        let legendContainer = mainSvg.selectAll('.parent')
            .append('g')
            .attr('class', 'legend')
            .attr('width', 100)
            .attr('transform', 'translate(' + (370 + (scaled - 1) * 200) + ',' + 30 + ')')

        var legend = legendContainer.selectAll('.legend')
            .data(data)
            .enter()
            .append('g')

        legend
            .attr('transform', (d, i) => {
                var x = ((i % 2 != 0) ? -paddingLegend : paddingLegend * -5)
                var y = Math.floor(i / 2) * paddingLegend * 2.5 - 10
                if (scaled < 1) {
                    var x = ((i % 2 != 0) ? -paddingLegend : paddingLegend * -5) * scaled
                    var y = (Math.floor(i / 2) * paddingLegend * 2.5 - 10) * scaled
                }
                return `translate(${x}, ${y})`
            })

        legend
            .append('rect')
            .attr('width', legendItemSize)
            .attr('height', legendItemSize)
            .attr("rx", legendItemSize / 2)
            .attr("rx", legendItemSize / 2)
            .style('fill', (d, i) => d.color)

        legend
            .append('text')
            .attr('x', legendItemSize + legendSpacing)
            .attr('y', legendItemSize - legendSpacing + 10)
            .style("font-size", "14px")
            .style("font-weight", "600")
            .attr('fill', '#727272')
            .text((d) => d.value + '%')

        legend
            .append('text')
            .attr('x', legendItemSize + legendSpacing)
            .attr('y', legendItemSize - legendSpacing + 30)
            .style("font-size", "12px")
            .attr('fill', '#727272')
            .text((d) => d.name)

        arcsData.on('mousemove', showTooltip)
        arcsData.on('mouseout', hideTooltip)
        arcsAxisPoint.on('mousemove', showTooltip)
        arcsAxisPoint.on('mouseout', hideTooltip)

        function arcTween(d, i) {
            let interpolate = d3.interpolate(0, d.value)
            return t => arc(interpolate(t), i)
        }

        function showTooltip(d, i) {
            console.log(d)
            tooltip.style('left', (d.pageX) - 73 + 'px')
                .style('top', (d.pageY - 10 - 28) + 'px')
                .style('display', 'inline-block')

                .text(dataObj.tooltipText + ' ' + i.value + '%')

            tooltipArrow
                .style('left', (d.pageX - 5) + 'px')
                .style('top', (d.pageY - 10) + 'px')
                .style('display', 'inline-block')
        }

        function hideTooltip() {
            tooltip.style('display', 'none')
            tooltipArrow.style('display', 'none')

        }

        function rad2deg(angle) {
            return angle * 180 / PI
        }

        function deg2rad(angle) {
            return angle / 180 * PI
        }

        function getInnerRadius(index) {
            return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding)
        }

        function getOuterRadius(index) {
            return getInnerRadius(index) + arcWidth
        }


        function getInnerRadiusPoint(index) {
            return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding)
        }

        function getOuterRadiusPoint(index) {
            return getInnerRadiusPoint(index) + arcWidth
        }
    }

    initFunc(dataObj.data, dataObj.title)
}
