import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const BASE_URL = 'https://665641349f970b3b36c4c86d.mockapi.io'

export default function Edit() {
    const { id } = useParams();
    const [todo, setTodo] = useState({name: ''})

    const fetchTodo = async(todoId) => {
        try {
          const response = await axios.get(`${BASE_URL}/todos/${todoId}`)
          setTodo(response.data)
        } catch (error) {
          console.log("error", error);
        }
    }
    
    useEffect(() => {
        fetchTodo(id)
    }, [id])

    const handleNameChage = (event) => {
        setTodo((previousState) => ({
            ...previousState,
            name: event.target.value
        }))
    }

    const updateName = async() => {
        try {
            await axios.put(`${BASE_URL}/todos/${id}`, {name: todo.name})
            alert('Update successful!')
        } catch (error) {
             console.log("error", error);
        }
      }
    
    return (
        <>
        <div>Edit {id}</div>
        <div>{todo.name}</div>
        <div>
            <input 
                type='text' 
                onChange={handleNameChage} 
                value={todo.name} 
            />
            {todo.status}
        </div>
        <button onClick={() => updateName()}>Edit</button>
    </>
  )
}
