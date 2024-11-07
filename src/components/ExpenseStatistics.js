import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ExpenseStatistics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { label: 'Entertainment', value: 30, color: '#ff5a5f' },
      { label: 'Bill Expense', value: 15, color: '#ffa500' },
      { label: 'Investment', value: 20, color: '#3b82f6' },
      { label: 'Others', value: 35, color: '#333' }
    ];

    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => d.data.color);

    svg.selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('fill', '#fff')
      .text(d => `${d.data.label}`);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Expense Statistics</h3>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default ExpenseStatistics;
