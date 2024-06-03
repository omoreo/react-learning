import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';

export default function TodoList() {
    const [todos, setTodos] = useState(() => {
        const SavedTodos = localStorage.getItem("todos");
        if(SavedTodos) {
            return JSON.parse(SavedTodos);
        } else {
            return [];
        }
    });
    const [todo, setTodo] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function handleInputChange(e) {
        setTodo(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if(todo !== "") {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo.trim()
                }
            ]);
        }
        setTodo("");
    }

    function handleDeleteClick(id) {
        const RemoveItem = todos.filter((todo) => {
            return todo.id !== id;
        });
        
        setTodos(RemoveItem);
    }

    function handleEditInputChange(e) {
        setCurrentTodo({...currentTodo, text: e.target.value});
        console.log(currentTodo);
    }
    
    function handleEditClick(todo) {
        setIsEditing(true);
        setCurrentTodo({...todo})
    }

    function handleUpdateTodo(id, updatedTodo) {
        const UpdatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });

        setIsEditing(false);
        setTodos(UpdatedItem);
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();

        handleUpdateTodo(currentTodo.id, currentTodo);
    }

    function handleCheckboxChange(id) {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, complete : !todo.completed} : todo
        ));
    }

    return(
        <div className='TodoList'>
            {isEditing ? (
                <EditTodoForm 
                    onhandleEditFormSubmit={handleEditFormSubmit}
                    currentTodo={currentTodo}
                    onhandleEditInputChange={handleEditInputChange}
                    setIsEditing={setIsEditing}
                />
            ) : (
                <AddTodoForm 
                    todo={todo}
                    onhandleFormSubmit={handleFormSubmit}
                    onhandleInputChange={handleInputChange}
                />
            )}
            <ul className="Todo-List">
                {todos.map((todo) => 
                    <TodoItem 
                        todo={todo}
                        onhandleEditClick={handleEditClick}
                        onhandleDeleteClick={handleDeleteClick}
                        onhandleCheckboxChange={handleCheckboxChange}
                    />
                )}
            </ul>
        </div>
    );
}
