import React, { useEffect, useState, useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Chart() {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0); // Initialwert für die Containerbreite

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch-chart');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        const fetchedData = json.map(item => ({
          time: item.date,
          Likes: item.total_likes
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth); // Setzt die Breite basierend auf dem aktuellen Container
      }
    };

    window.addEventListener('resize', updateWidth);
    updateWidth(); // Initialen Aufruf zum Setzen der Breite

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="chart-container" ref={containerRef}>
      <AreaChart
        width={containerWidth} // Verwendung der dynamisch festgelegten Breite
        height={400}
        data={data}
        className="background-color-secondary"
      >
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" align="left" wrapperStyle={{ left: 0, top: 0 }} />
        <defs>
          <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#30D5C8" />
            <stop offset="100%" stopColor="#e025fa" />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="Likes" stroke="#8884d8" fillOpacity={1} fill="url(#colorGradient)" />
      </AreaChart>
    </div>
  );
}
