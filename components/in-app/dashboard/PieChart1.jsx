import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChart1 = () => {
  const [data, setData] = useState([]);

  const COLORS = ['#7E57C2', '#0e9692', '#FF81AE', '#ee031e'];

  useEffect(() => {
    // API aufrufen, um Daten zu erhalten
    fetch('http://localhost:5000/fetch-chart-data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.json();
      })
      .then(fetchedData => {
        // Umwandlung der Daten in das benötigte Format
        const formattedData = Object.keys(fetchedData).map(key => ({
          name: key,
          value: fetchedData[key]
        }));
        setData(formattedData);
      })
      .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
  }, []);

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <h3 className="follower-text">Follower</h3>
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
    </div>
  );
};

export default PieChart1;
