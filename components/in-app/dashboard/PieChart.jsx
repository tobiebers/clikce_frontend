import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const DoughnutChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = [
    { name: 'Instagram', value: 30 },
    { name: 'Facebook', value: 20 },
    { name: 'TikTok', value: 20 },
    { name: 'YouTube', value: 20 },
  ];

  const COLORS = ['#7E57C2', '#92E3CA', '#FF81AE', '#9EE392'];

  return (
    <div>
      {isClient && (
        <PieChart width={400} height={330}>
          <Pie
            data={data}
            cx={200}
            cy={165} // Adjust the cy value to vertically center the chart
            innerRadius={60} // Set innerRadius to 0
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            cornerRadius={10}
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
