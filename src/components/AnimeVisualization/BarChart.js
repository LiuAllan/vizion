import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// const data = [
//   {
//     name: 'Page A', pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', pv: 4300, amt: 2100,
//   },
// ];

const BarChartViz = ({data}) => {

    return (
      <div style={{ width: '100%', height:'400px'}}>
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
