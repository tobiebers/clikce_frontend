import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { date: '2024-01-01', likes: 400 },
  { date: '2024-01-02', likes: 300 },
  { date: '2024-01-03', likes: 500 },
  { date: '2024-01-04', likes: 200 },
  { date: '2024-01-05', likes: 300 },
  // ... Weitere Datenpunkte ...
];

function LikesLineChart() {
  return (
    <LineChart width={600} height={300} data={data}
               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="likes" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default LikesLineChart;
