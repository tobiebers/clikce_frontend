import React from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';


import { Button } from 'react-bootstrap';
import {ArcElement} from "chart.js";

Chart.register(ArcElement);


export default function PieChart() {
  // Daten für das Tortendiagramm
  const data = {
    labels: ['Instagram', 'Facebook', 'TikTok', 'YouTube'],
    datasets: [
      {
        data: [30, 20, 25, 25], // Beispielzahlen, ersetze sie durch deine echten Daten
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // Farben für jedes Segment
      },
    ],
  };

  // Optionen für das Tortendiagramm
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const total = dataset.data.reduce((acc, value) => acc + value, 0);
          const currentValue = dataset.data[tooltipItem.index];
          const percentage = ((currentValue / total) * 100).toFixed(2);
          return `${currentValue} Follower (${percentage}%)`;
        },
      },
    },
  };

  return (
    <div className="text-center">
      <Doughnut data={data} options={options} height={200} />
      <div className="mt-3">
        {data.labels.map((label, index) => (
          <span key={index} className="mx-2">
            {label}
          </span>
        ))}
      </div>
      <Button variant="3" className="mt-3" style={{ backgroundColor: 'transparent', border: 'none' }}>
        3.
      </Button>
    </div>
  );
}
