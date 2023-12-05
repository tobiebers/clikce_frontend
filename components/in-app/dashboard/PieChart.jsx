import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const DoughnutChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = [
    { name: 'Gruppe A', value: 30 },
    { name: 'Gruppe B', value: 20 },
    { name: 'Gruppe C', value: 25 },
    { name: 'Gruppe D', value: 25 },
  ];

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'];

  return (
    <div>
      {isClient && (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
};

export default DoughnutChart;
