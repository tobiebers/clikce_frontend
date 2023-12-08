import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


export default function PieChart1() {
    const [data, setData] = useState(0);

    useEffect(() => {
        const fetchChartPie = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch-chart-data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    const json= await response.json();

        // Anpassung der Datenformatierung entsprechend den Backend-Schlüsseln
        const fetchedData = Object.entries(json).map(([key, value]) => ({
          name: key.replace('wert', ''), // Entferne 'wert' aus dem Schlüssel
          value: value
        }));(fetchedData);

      } catch (error) {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      }
    };

    fetchChartPie();
  }, []);

    const COLORS = ['#7E57C2', '#0e9692', '#FF81AE', '#ee031e'];

  return (
    <div className="mt-3">
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
    </div>
  );
};