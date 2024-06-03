import React from 'react'

export default function TodoItem({todo, onhandleEditClick, onhandleDeleteClick, onhandleCheckboxChange}) {
  return (
    <li key={todo.id} className="todo-item">
        <label>
            <input 
                type="checkbox"
                checked={todo.complete}
                onChange={() => onhandleCheckboxChange(todo.id)}
            />
        </label>
        {todo.text}
        <div className="button">
            <button className="btn1" onClick={() => onhandleEditClick(todo)}>Edit</button>
            <button className="btn2" onClick={() => onhandleDeleteClick(todo.id)}>Delete</button>
        </div>
    </li>
  )
}
