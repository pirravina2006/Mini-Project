import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#6b7280'];

const StatsChart = ({ byCategory }) => {
  const data = Object.entries(byCategory || {}).map(([name, value]) => ({ name, value }));
  if (!data.length) return <p style={{ color: '#6b7280' }}>No data to display.</p>;
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
          {data.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        <Tooltip formatter={(v) => `₹ ${v.toFixed(2)}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StatsChart;
