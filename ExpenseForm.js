import React, { useState, useEffect } from 'react';

const CATEGORIES = ['Food', 'Travel', 'Bills', 'Shopping', 'Entertainment', 'Health', 'Other'];

const ExpenseForm = ({ onSubmit, editing, onCancel }) => {
  const [form, setForm] = useState({
    title: '', amount: '', category: 'Food',
    date: new Date().toISOString().slice(0, 10), notes: ''
  });

  useEffect(() => {
    if (editing) {
      setForm({
        title: editing.title,
        amount: editing.amount,
        category: editing.category,
        date: editing.date.slice(0, 10),
        notes: editing.notes || ''
      });
    }
  }, [editing]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, amount: parseFloat(form.amount) });
    if (!editing) {
      setForm({ title: '', amount: '', category: 'Food',
        date: new Date().toISOString().slice(0, 10), notes: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="section-title">{editing ? 'Edit Expense' : 'Add New Expense'}</h3>
      <div className="form-row">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="amount" type="number" step="0.01" placeholder="Amount" value={form.amount} onChange={handleChange} required />
      </div>
      <div className="form-row">
        <select name="category" value={form.category} onChange={handleChange}>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
      </div>
      <textarea name="notes" placeholder="Notes (optional)" value={form.notes} onChange={handleChange} rows="2" />
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="submit">{editing ? 'Update' : 'Add Expense'}</button>
        {editing && <button type="button" className="secondary" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default ExpenseForm;
