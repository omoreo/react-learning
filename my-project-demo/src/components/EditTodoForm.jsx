import React from 'react'

export default function EditTodoForm({onhandleEditFormSubmit, currentTodo, onhandleEditInputChange, setIsEditing}) {
  return (
    <form onSubmit={onhandleEditFormSubmit}>
        <h2>Edit Todo</h2>
        <labe htmlFor="editTodo">Edit Todo: </labe>
        <input 
            name="editTodo"
            type="text"
            value={currentTodo.text}
            onChange={onhandleEditInputChange}
        />
        <button type="submit">Update</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  )
}
