import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, Label, CartesianGrid, defs, linearGradient, stop } from "recharts";

export default function Chart() {
  const [visitors1, setVisitors1] = useState(0);
  const [visitors2, setVisitors2] = useState(0);
  const [visitors3, setVisitors3] = useState(0);
  const [visitors4, setVisitors4] = useState(0);
  const [visitors5, setVisitors5] = useState(0);
  const [visitors6, setVisitors6] = useState(0);
  const [visitors7, setVisitors7] = useState(0);
  const [visitors8, setVisitors8] = useState(0);
  const [visitors9, setVisitors9] = useState(0);
  const [visitors10, setVisitors10] = useState(0);

  useEffect(() => {
    const fetchChart = async () => {

      try {
        const response = await fetch('http://localhost:5000/fetch-chart');
        const data = await response.json();
        setVisitors1(data.visitors1);
        setVisitors2(data.visitors2);
        setVisitors3(data.visitors3);
        setVisitors4(data.visitors4);
        setVisitors5(data.visitors5);
        setVisitors6(data.visitors6);
        setVisitors7(data.visitors7);
        setVisitors8(data.visitors8);
        setVisitors9(data.visitors9);
        setVisitors10(data.visitors10);

      } catch (error) {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      }
    };

    fetchChart();
  }, []);

  const data = [
    { time: '10pm', visitors: visitors1 },
    { time: '11pm', visitors: visitors2 },
    { time: '12am', visitors: visitors3 },
    { time: '1am', visitors: visitors4 },
    { time: '2am', visitors: visitors5 },
    { time: '3am', visitors: visitors6 },
    { time: '4am', visitors: visitors7 },
    { time: '5am', visitors: visitors8 },
    { time: '6am', visitors: visitors9 },
    { time: '7am', visitors: visitors10 }
  ];

  return (
    <div className="chart-container">
      <AreaChart
        width={600}
        height={300}
        data={data}
        className="background-color-secondary chart-abstand mt-3"
      >
        <XAxis dataKey="time" />
        <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
        <Tooltip />
        <Legend />

        <defs>
          <linearGradient id="colorGradient" x1="25%" y1="0%" x2="75%" y2="0%">
            <stop offset="0%" stopColor="#30D5C8" />
            <stop offset="100%" stopColor="#e025fa" />
          </linearGradient>
        </defs>

        <Area type="monotone" dataKey="visitors" stroke="none" fill="url(#colorGradient)" />

        {/* Verschiebe das Label nach links oben über der Y-Achse */}
        <Label value="visitors" position="insideTopLeft" angle={-90} dx={-20} dy={-20} />
      </AreaChart>
    </div>
  );
}
