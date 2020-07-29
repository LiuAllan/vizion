import React, { useEffect, useReducer } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const RadarChartViz = ({ data }) => {
  // console.log(data);
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