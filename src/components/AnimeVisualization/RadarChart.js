import React, { useEffect, useReducer } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const RadarChartViz = ({ data }) => {
  // console.log(data);
  return (
    <RadarChart cx={225} cy={225} outerRadius={100} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Genres" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default RadarChartViz;