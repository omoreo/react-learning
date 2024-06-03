import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const BASE_URL = 'https://665641349f970b3b36c4c86d.mockapi.io'

  const fetchTodo = async() => {
      try {
        const response = await axios.get(`${BASE_URL}/todos`)
        setTodos(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log("error", error);
      }
  }

  const deleteTodo = async(id) => {
    try {
      setIsLoading(true)
      await axios.delete(`${BASE_URL}/todos/${id}`)
      fetchTodo()
      setIsLoading(false)
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() =>  {
    fetchTodo()
  }, []) //array ว่างเพราะทำงานแค่รอบเดียวใน useEffect

  return (
    <>
      {isLoading && (<div>Loading...</div>)}
      {!isLoading && <div>
          {
            todos.map((todo, index) => (
              <div key={index}>
                {todo.id} {todo.name} {todo.status}
                <Link to={`/todo/${todo.id}`}>
                <button>Edit</button>
                </Link>
                <button onClick={async () => {await deleteTodo(todo.id)}}>
                  Delete
                </button>
              </div>
            ))
          }
        </div>}
      </>
    );
  }
  
  export default App;
  