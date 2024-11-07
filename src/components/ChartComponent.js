import React, { useEffect, useState } from 'react';
import { Chart as ChartJS,LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Subject } from 'rxjs';

ChartJS.register(LinearScale, BarElement, Title, Tooltip, Legend);

const chartDataSubject = new Subject();

export const updateChartData = (newData) => chartDataSubject.next(newData);

export const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  useEffect(() => {
    const subscription = chartDataSubject.subscribe((newData) => {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: newData,
          },
        ],
      }));
    });
    return () => subscription.unsubscribe();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dynamic Chart with RxJS',
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg w-full max-w-md mx-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
};
