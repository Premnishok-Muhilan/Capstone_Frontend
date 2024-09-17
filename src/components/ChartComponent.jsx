import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register required Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const ChartComponent = () => {
  // Sample data
  const data = [
    {
      _id: '66e93111207e4b36287cde9d',
      Event_Name: "Shakespeare's Hamlet",
      Revenue: 100,
    },
    {
      _id: '66e96b322d3bd8bea03df60d',
      Event_Name: 'Football event',
      Revenue:1500,
    },
  ];

  // Extract event names and revenues
  const labels = data.map(item => item.Event_Name);
  const revenues = data.map(item => item.Revenue);

  // Chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Revenue',
        data: revenues,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to fill container
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Revenue: $${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          maxRotation: 45, // Adjusts the rotation of x-axis labels
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="max-w-full p-6 bg-white rounded-lg shadow-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Event Revenue</h2>
      <div className="bg-white rounded-lg p-4 shadow w-full">
        <div className="relative w-full" style={{ height: '300px' }}>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
