import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WeeklyActivity = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { day: 'Sat', deposit: 200, withdraw: 100 },
      { day: 'Sun', deposit: 400, withdraw: 300 },
      { day: 'Mon', deposit: 300, withdraw: 400 },
      { day: 'Tue', deposit: 500, withdraw: 200 },
      { day: 'Wed', deposit: 200, withdraw: 300 },
      { day: 'Thu', deposit: 400, withdraw: 200 },
      { day: 'Fri', deposit: 300, withdraw: 500 },
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand().domain(data.map(d => d.day)).range([0, width]).padding(0.2);
    const y = d3.scaleLinear().domain([0, 600]).range([height, 0]);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));

    svg.selectAll('.bar-deposit')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-deposit')
      .attr('x', d => x(d.day))
      .attr('y', d => y(d.deposit))
      .attr('width', x.bandwidth() / 2)
      .attr('height', d => height - y(d.deposit))
      .attr('fill', '#3b82f6');

    svg.selectAll('.bar-withdraw')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-withdraw')
      .attr('x', d => x(d.day) + x.bandwidth() / 2)
      .attr('y', d => y(d.withdraw))
      .attr('width', x.bandwidth() / 2)
      .attr('height', d => height - y(d.withdraw))
      .attr('fill', '#333');
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Weekly Activity</h3>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default WeeklyActivity;
