import React from 'react';
import './pdash.css';
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';

export const Grade = () => {
    const ProgressCard = ({ title, score, progress }) => {
      return (
        <div className="progress-card"> 
          <h4>{title}</h4>
          {score ? (
            <p className="score">{score}</p>
          ) : (
            <p className="progress">{progress}</p>
          )}
        </div>
      );
    };

    // Define the data for the LineChart
    const data = [
      { name: '1st year', value: 40 },
      { name: '', value: 30 },
      { name: '2nd year', value: 20 },
      { name: '', value: 27 },
      { name: '3rd year', value: 18 },
      { name: '', value: 23 },
      { name: '4th year', value: 34 }
    ];

    return (
      <div className="dashboard-content">
        <div className="dashboard-welcome">
          <p>Here’s an overview of your course</p>
        </div>
        <div className="progress-section">
          <div className="progress-card">
            <ProgressCard title="Completed" score="50" />
          </div>
          <div className="progress-card">
            <ProgressCard title="Quiz Score" score="50" />
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>

        <div className="daily-progress">
          <div className="progress-chart">
            {/* Insert chart here using any chart library like Chart.js */}
          </div>
        </div>
      </div>
    );
};
