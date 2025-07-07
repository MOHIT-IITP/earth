'use client'
import { showErrorToast, showSuccessToast } from '@/lib/toastUtils';
import React, { useState } from 'react'

const Todo = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    priority: 'MEDIUM',
    dueDate: '',
    authorId: '',
    noteId: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to add todo');
      showSuccessToast('Todo added!');
      setForm({
        title: '',
        description: '',
        priority: 'MEDIUM',
        dueDate: '',
        authorId: '',
        noteId: '',
      });
    } catch (err) {
      showErrorToast('Error adding todo');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='mt-20'>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder='Title' value={form.title} onChange={handleChange} />
        <input name="description" placeholder='Description' value={form.description} onChange={handleChange} />
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
          <option value="URGENT">URGENT</option>
        </select>
        <input name="dueDate" type='date' value={form.dueDate} onChange={handleChange} />
        <input name="authorId" placeholder='authorId' value={form.authorId} onChange={handleChange} />
        <input name="noteId" placeholder='Note ID' value={form.noteId} onChange={handleChange} />
        <button type='submit' disabled={loading}>{loading ? 'Adding...' : 'Add Todo'}</button>
      </form>
    </div>
  )
}

export default Todo
