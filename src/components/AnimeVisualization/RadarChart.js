import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const RadarChartViz = ({ data }) => {
  // console.log(data);
  return (
    <div style={{ width: '100%', height:'400px'}}>
      <ResponsiveContainer>
        <RadarChart cx={250} cy={200} outerRadius={80} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Genres" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarChartViz;