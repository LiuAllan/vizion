import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  {
    subject: 'Action', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Comedy', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Drama', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Supernatural', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Mecha/Military', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Romance', A: 65, B: 85, fullMark: 150,
  },
];

const RadarChartViz = () => {

    return (
      <RadarChart cx={300} cy={300} outerRadius={150} width={600} height={600} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Genres" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
}

export default RadarChartViz;