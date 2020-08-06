import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const BarChartViz = ({data}) => {

    return (
      <div style={{ width: '100%', height:'485px'}}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis /> 
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="tags" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default BarChartViz;
