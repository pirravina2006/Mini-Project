import React from 'react';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  if (!expenses.length) return <p style={{ color: '#6b7280' }}>No expenses found.</p>;
  return (
    <div style={{ overflowX: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>Date</th><th>Title</th><th>Category</th><th>Amount</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(e => (
            <tr key={e._id}>
              <td>{new Date(e.date).toLocaleDateString()}</td>
              <td>{e.title}</td>
              <td>{e.category}</td>
              <td>₹ {e.amount.toFixed(2)}</td>
              <td>
                <div className="actions">
                  <button onClick={() => onEdit(e)}>Edit</button>
                  <button className="danger" onClick={() => onDelete(e._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
