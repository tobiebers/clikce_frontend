import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch-chart');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        const fetchedData = Object.entries(json).map(([key, value]) => ({
          time: key,
          visitors: value
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <AreaChart
        width={600}
        height={300}
        data={data}
        className="background-color-secondary chart-abstand"
      >
        <XAxis dataKey="time" />
        <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
        <Tooltip />
        <Legend verticalAlign="top" align="left" wrapperStyle={{ left: 0, top: 0 }} />
        <defs>
          <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#30D5C8" />
            <stop offset="100%" stopColor="#e025fa" />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="visitors" stroke="#8884d8" fillOpacity={1} fill="url(#colorGradient)" />
      </AreaChart>
    </div>
  );
}
