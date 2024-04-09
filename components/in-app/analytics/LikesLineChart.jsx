import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function LikesLineChart({ username }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Angenommen, Ihr Backend stellt einen Endpunkt zur Verfügung, der die Likes-Daten zurückgibt
    // Ersetzen Sie 'http://localhost:5000/likes-data' durch den tatsächlichen Endpunkt
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/likes-data?username=${encodeURIComponent(username)}`);
        if (!response.ok) {
          throw new Error('Netzwerkantwort war nicht ok');
        }
        const data = await response.json();
        setChartData(data); // Nehmen Sie an, dass 'data' bereits im richtigen Format ist
      } catch (error) {
        console.error("Fehler beim Laden der Likes-Daten:", error);
      }
    };

    fetchData();
  }, [username]); // Aktualisieren Sie die Daten, wenn sich 'username' ändert

  return (
    <LineChart width={600} height={300} data={chartData}
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
