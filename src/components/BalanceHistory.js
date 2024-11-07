import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BalanceHistory = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { month: 'Jul', balance: 400 },
      { month: 'Aug', balance: 600 },
      { month: 'Sep', balance: 800 },
      { month: 'Oct', balance: 700 },
      { month: 'Nov', balance: 500 },
      { month: 'Dec', balance: 700 },
      { month: 'Jan', balance: 800 },
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scalePoint().domain(data.map(d => d.month)).range([0, width]);
    const y = d3.scaleLinear().domain([0, 1000]).range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

    const line = d3.line()
      .x(d => x(d.month))
      .y(d => y(d.balance))
      .curve(d3.curveMonotoneX);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#3b82f6')
      .attr('stroke-width', 2)
      .attr('d', line);

    svg.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.month))
      .attr('cy', d => y(d.balance))
      .attr('r', 4)
      .attr('fill', '#3b82f6');
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Balance History</h3>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default BalanceHistory;
