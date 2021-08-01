import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({ dataHouse, title, dataKey }) {




    return (
        <div className="chartConatiner">

            <div className="chartWrapper">

                {console.log(`name:${dataKey}`)}
                <h1>{title}</h1>

                <ResponsiveContainer width="100%" aspect={4 / 1}>

                    <LineChart
                        data={dataHouse}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name"/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey= {dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                        
                    </LineChart>
                </ResponsiveContainer>



            </div>

        </div>
    )
}

export default Chart
