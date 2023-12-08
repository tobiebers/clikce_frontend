import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, Label, CartesianGrid, defs, linearGradient, stop } from "recharts";

export default function Chart() {
  const data = [
    { time: '10pm', visitors: 40 },
    { time: '11pm', visitors: 20 },
    { time: '12am', visitors: 80 },
    { time: '1am', visitors: 20 },
    { time: '2am', visitors: 100 },
    { time: '3am', visitors: 80 },
    { time: '4am', visitors: 60 },
    { time: '5am', visitors: 40 },
    { time: '6am', visitors: 20 },
    { time: '7am', visitors: 0 },
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
