import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChart1 = () => {
  const [isClient, setIsClient] = useState(false);
  const [wertInstagram, setWertInstagram] = useState(30);

  useEffect(() => {
    const fetchWertInstagram = async () => {
      try {
        const response = await fetch('http://localhost:5000/pie-chart-data');
        const data = await response.json();
        setWertInstagram(data.wertInstagram);
        setIsClient(true); // Setze isClient auf true, wenn die Daten abgerufen wurden
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      }
    };

    fetchWertInstagram();
  }, []); // Leerer Abhängigkeitsarray, um sicherzustellen, dass der Effekt nur einmal bei der Montage aufgerufen wird

  const data = [
    { name: 'Instagram', value: wertInstagram },
    { name: 'Facebook', value: 20 },
    { name: 'TikTok', value: 20 },
    { name: 'YouTube', value: 20 },
  ];

  const COLORS = ['#7E57C2', '#0e9692', '#FF81AE', '#ee031e'];

  return (
    <div>
      {isClient && (
        <div style={{ position: 'relative' }}>
          <h3 className="follower-text">
            Follower
          </h3>
          <PieChart width={400} height={330} className="background-color-secondary borderChart">
            <Pie
              data={data}
              cx={200}
              cy={165}
              innerRadius={60}
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
        </div>
      )}
    </div>
  );
};

export default PieChart;
