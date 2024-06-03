import React from 'react'

export default function AddTodoForm({todo, onhandleFormSubmit, onhandleInputChange}) {
  return (
    <form onSubmit={onhandleFormSubmit}>
        {/* <h1>Todo List</h1> */}
        <h2>Add Todo</h2>
        <input 
            id="todo"
            name='todo'
            type="text"
            value={todo}
            placeholder='Create a new Todo'
            onChange={onhandleInputChange}
        />
        <button type="submit">Add</button>
    </form>
  )
}
