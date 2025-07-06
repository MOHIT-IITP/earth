'use client'
import React, { useState } from 'react'

const Todo = () => {
  const [form , setForm] = useState({
    title: '',
    description: '',
    priority: 'MEDIUM',
    dueDate: '',
    authorId: '',
    noteId: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder='Title' onChange={handleChange} />
      <input name="description" placeholder='Description' onChange={handleChange} />
      <select name="priority" id="" onChange={handleChange}>
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
        <option value="URGENT">URGENT</option>
      </select>
      <input name="dueDate"  type='date' onChange={handleChange}/>
      <input name="authorId" placeholder='Auth' />
      <input type="text" />
      <button>Add Todo</button>
    </form>
  )
}

export default Todo
